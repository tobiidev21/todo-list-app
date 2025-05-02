import express from 'express'
import { createWorkspace, getWorkspace, getWorkspaces, modifyWorkspace, removeWorkspace } from '../controllers/workspace.controller.js'

const router = express.Router()

router.get('/', getWorkspaces)
router.get('/:id', getWorkspace)
router.post('/', createWorkspace)
router.put('/:id', modifyWorkspace)
router.delete('/:id', removeWorkspace)

export default router
