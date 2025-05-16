import express from 'express'
import { getUsers, getUser, createUser, partialModifyUser, modifyUser, removeUser } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/login', getUser)
router.post('/register', createUser)
router.patch('/:id', partialModifyUser)
router.put('/:id', modifyUser)
router.delete('/:id', removeUser)

export default router
