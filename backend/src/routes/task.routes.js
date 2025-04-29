import express from 'express'
import { getTasks, getTask, createTask } from '../controllers/task.controller.js'

const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', createTask)

export default router
