import db from '../db/connection.js'

// select functions
export function queryAllTasks () {
  const stmt = db.prepare('SELECT * FROM tasks')
  return stmt.all()
}

export function queryTask () {
  const stmt = db.prepare('SELECT * FROM tasks WHERE id = ?')
  return stmt.get(1)
}

// insert functions
export function insertTask (title, description, progress, workspaceId) {
  const stmt = db.prepare(`
    INSERT INTO tasks (title, description, progress, workspaceId)
    VALUES (?, ?, ?, ?)
    `)
  const info = stmt.run(title, description, progress, workspaceId)
  return info.lastInsertRowid
}
