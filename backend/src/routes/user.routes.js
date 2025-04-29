import express from 'express'
import { getUsers, getUser } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/user', getUser)

export default router
