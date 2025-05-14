import { queryAllUsers, queryUser, insertUser } from '../services/user.service.js'

export function getUsers (req, res) {
  const users = queryAllUsers()
  res.json(users)
}

export function getUser (req, res) {
  const user = queryUser()
  res.json(user)
}

export function createUser (req, res) {
  const { name, email } = req.body
  try {
    const userId = insertUser(name, email)
    res.status(201).json({ userId, name, email })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al insertar el usuario! ' })
  }
}
