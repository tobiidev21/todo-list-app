import { queryAllUsers, queryUser, insertUser, updateUser, replaceUser, deleteUser } from '../services/user.service.js'

export function getUsers (req, res) {
  const users = queryAllUsers()
  res.json(users)
}

export async function getUser (req, res) {
  const { email, password } = req.body
  try {
    const response = await queryUser(email, password)
    res.status(201).json(response)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al obtener el usuario! ' })
  }
}

export async function createUser (req, res) {
  const { name, email, password } = req.body
  try {
    const userId = await insertUser(name, email, password)
    res.status(201).json({ userId, name, email, password })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al insertar el usuario! ' })
  }
}

export async function partialModifyUser (req, res) {
  try {
    const { fieldToModify, value } = req.body
    const id = req.params.id
    const totalModifiedUsers = await updateUser(id, fieldToModify, value)
    res.status(201).json({ totalModifiedUsers, modifiedUser: { id, fieldToModify, value } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar el usuario' })
  }
}

export async function modifyUser (req, res) {
  try {
    const { fieldsToModify, values } = req.body
    const id = req.params.id
    const totalModifiedUsers = await replaceUser(id, fieldsToModify, values)
    res.status(201).json({ totalModifiedUsers, modifiedUser: { id, fieldsToModify, values } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar el usuario' })
  }
}

export function removeUser (req, res) {
  try {
    const id = req.params.id
    const { name } = req.body
    const totalRemovedUser = deleteUser(id)
    res.status(201).json({ totalRemovedUser, removedUser: { name } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al eliminar el usuario' })
  }
}
