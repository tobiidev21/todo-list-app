import db from '../db/connection.js'

// select functions
export function queryAllWorkspaces () {
  const stmt = db.prepare('SELECT * FROM workspaces')
  return stmt.all()
}

export function queryWorkspace (id) {
  const stmt = db.prepare('SELECT * FROM workspaces WHERE id = ?')
  return stmt.get(id)
}

// insert functions
export function insertWorkspace (name) {
  const stmt = db.prepare('INSERT INTO workspaces (name) VALUES (?)')
  const info = stmt.run(name)
  return info.lastInsertRowid
}

// update functions
export function updateWorkspace (id, name) {
  const stmt = db.prepare('UPDATE workspaces SET name = ? WHERE id = ?')
  const info = stmt.run(name, id)
  return info.changes
}

// delete functions
export function deleteWorkspace (id) {
  const stmt = db.prepare('DELETE FROM workspaces WHERE id = ?')
  const info = stmt.run(id)
  return info.changes
}
