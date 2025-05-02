import express from 'express'
import { getTasks, getTask, createTask, modifyTask, partialModifyTask, removeTask } from '../controllers/task.controller.js'

const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTask)

router.post('/', createTask)
router.patch('/:id', partialModifyTask)
router.put('/:id', modifyTask)
router.delete('/:id', removeTask)

export default router
