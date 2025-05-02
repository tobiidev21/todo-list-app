import db from '../db/connection.js'

// select functions
export function queryAllTasks () {
  const stmt = db.prepare('SELECT * FROM tasks')
  return stmt.all()
}

export function queryTask (id) {
  const stmt = db.prepare('SELECT * FROM tasks WHERE id = ?')
  return stmt.get(id)
}

// insert functions
export function insertTask (title, description, progress, workspaceId) {
  const stmt = db.prepare(`
    INSERT INTO tasks (title, description, progress, workspaceId)
    VALUES (?, ?, ?, ?)
    `)
  const info = stmt.run(title, description, progress, workspaceId)
  return info.lastInsertRowid // devolvemos el ID ya que es generado automáticamente por la base de datos
}

// update functions

export function updateTask (id, fieldToModify, value) {
  // Lista blanca de campos que se pueden modificar
  const allowedFields = ['title', 'description', 'progress']

  if (!allowedFields.includes(fieldToModify)) {
    throw new Error('Campo no permitido')
  }

  const stmt = db.prepare(`UPDATE tasks SET ${fieldToModify} = ? WHERE id = ?`)
  const info = stmt.run(value, id)

  return info.changes // número de filas modificadas
}

export function replaceTask (id, fields, values) {
  // Lista blanca de campos permitidos
  const allowedFields = ['title', 'description', 'progress']

  // Validaciones
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

  // SET del SQL: "title = ?, description = ?, ..."
  const setClause = fields.map(field => `${field} = ?`).join(', ')

  const stmt = db.prepare(`UPDATE tasks SET ${setClause} WHERE id = ?`)
  const info = stmt.run(...values, id)
  console.log()

  return info.changes // número de filas modificadas
}

// delete functions

export function deleteTask (id) {
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?')
  const info = stmt.run(id)
  return info.changes
}
