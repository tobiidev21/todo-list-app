import db from '../db/connection.js'

export function queryAllUsers () {
  const stmt = db.prepare('SELECT * FROM users')
  return stmt.all()
}

export function queryUser () {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?')
  return stmt.get(1)
}

export function insertUser (name, email) {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
  const info = stmt.run(name, email)
  return info.lastInsertRowid
}
