import db from '../db/connection.js'
import bcrypt from 'bcrypt'

export function queryAllUsers () {
  const stmt = db.prepare('SELECT id, name, email FROM users')
  return stmt.all()
}

export async function queryUser (email, password) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?')
  const userInfo = stmt.get(email)

  if (!userInfo) {
    throw new Error('Usuario no encontrado')
  }

  const matches = await bcrypt.compare(password, userInfo.password)
  if (matches) {
    const { password, ...userWithoutPassword } = userInfo
    return userWithoutPassword
  } else {
    throw new Error('La contraseña no coincide!')
  }
}

export async function insertUser (name, email, password) {
  const saltRounds = 10
  const hash = await bcrypt.hash(password, saltRounds)

  const stmt = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)')
  const info = stmt.run(name, email, hash)
  return info.lastInsertRowid
}

export async function updateUser (id, fieldToModify, value) {
  // Lista blanca de campos que se pueden modificar
  const allowedFields = ['name', 'email', 'password']

  if (fieldToModify === 'password') {
    const saltRounds = 10
    value = await bcrypt.hash(value, saltRounds)
  }

  if (!allowedFields.includes(fieldToModify)) {
    throw new Error('Campo no permitido')
  }

  const stmt = db.prepare(`UPDATE users SET ${fieldToModify} = ? WHERE id = ?`)
  const info = stmt.run(value, id)

  return info.changes // número de filas modificadas
}

export async function replaceUser (id, fields, values) {
  const allowedFields = ['name', 'email', 'password']

  if (!Array.isArray(fields) || !Array.isArray(values)) {
    throw new Error('Los campos y valores deben ser arrays')
  }

  if (fields.length !== values.length) {
    throw new Error('Los arrays deben tener la misma longitud')
  }

  for (const field of fields) {
    if (!allowedFields.includes(field)) {
      throw new Error(`Campo no permitido: ${field}`)
    }
  }

  // hash
  const saltRounds = 10
  const passwordIndex = fields.indexOf('password')
  if (passwordIndex !== -1) {
    values[passwordIndex] = await bcrypt.hash(values[passwordIndex], saltRounds)
  }

  // SET de SQL: "name = ?, email = ?, ..."
  const setClause = fields.map(field => `${field} = ?`).join(', ')

  const stmt = db.prepare(`UPDATE users SET ${setClause} WHERE id = ?`)
  const info = stmt.run(...values, id)

  return info.changes // número de filas modificadas
}

export function deleteUser (id) {
  const stmt = db.prepare('DELETE FROM users WHERE id = ?')
  const info = stmt.run(id)
  return info.changes
}
