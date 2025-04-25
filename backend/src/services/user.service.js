import db from '../db/connection.js'

export function getAllUsers () {
  const stmt = db.prepare('SELECT * FROM users')
  return stmt.all()
}
