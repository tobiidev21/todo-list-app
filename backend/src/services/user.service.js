import db from '../db/connection.js'

export function queryAllUsers () {
  const stmt = db.prepare('SELECT * FROM users')
  return stmt.all()
}

export function queryUser () {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?')
  return stmt.get(1)
}
