import { getAllUsers } from '../services/user.service.js'

export function getUsers (req, res) {
  const users = getAllUsers()
  res.json(users)
}
