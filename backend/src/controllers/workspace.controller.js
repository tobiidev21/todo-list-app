import { deleteWorkspace, insertWorkspace, queryAllWorkspaces, queryWorkspace, updateWorkspace } from '../services/workspace.service.js'

export function getWorkspaces (req, res) {
  try {
    const workspaces = queryAllWorkspaces()
    res.status(201).json(workspaces)
  } catch (e) {
    console.log(e)
    res.status(404).json({ error: 'Error al obtener los espacios de trabajo' })
  }
}

export function getWorkspace (req, res) {
  try {
    const id = req.params.id
    const workspace = queryWorkspace(id)
    res.status(201).json(workspace)
  } catch (e) {
    console.log(e)
    res.status(404).json({ error: 'Error al obtener el espacio de trabajo' })
  }
}

export function createWorkspace (req, res) {
  try {
    const { name } = req.body
    const workspaceId = insertWorkspace(name)
    res.status(201).json({ id: workspaceId, name })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al crear el espacio de trabajo' })
  }
}

export function modifyWorkspace (req, res) {
  try {
    const id = req.params.id
    const { name } = req.body
    const totalModifiedWorkspaces = updateWorkspace(id, name)
    res.status(201).json({ totalModifiedWorkspaces, modifiedWorkspace: { name } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar el espacio de trabajo' })
  }
}

export function removeWorkspace (req, res) {
  try {
    const id = req.params.id
    const { name } = req.body
    const totalRemovedWorkspaces = deleteWorkspace(id)
    res.status(201).json({ totalRemovedWorkspaces, removedWorkspace: { name } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar el espacio de trabajo' })
  }
}
