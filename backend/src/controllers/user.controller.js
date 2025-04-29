import { queryAllUsers, queryUser } from '../services/user.service.js'

export function getUsers (req, res) {
  const users = queryAllUsers()
  res.json(users)
}

export function getUser (req, res) {
  const user = queryUser()
  res.json(user)
}
