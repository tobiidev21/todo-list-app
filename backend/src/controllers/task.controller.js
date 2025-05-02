import { queryTask, queryAllTasks, insertTask, updateTask, replaceTask, deleteTask } from '../services/task.service.js'

export function getTasks (req, res) {
  const tasks = queryAllTasks()
  res.json(tasks)
}

export function getTask (req, res) {
  try {
    const id = req.params.id
    const task = queryTask(id)
    res.status(201).json(task)
  } catch (e) {
    res.status(404).json({ error: 'No se pudo obtener la tarea' })
  }
}

export function createTask (req, res) {
  try {
    const { title, description, progress, workspaceId } = req.body
    const taskId = insertTask(title, description, progress, workspaceId)
    res.status(201).json({ id: taskId, title, description, progress, workspaceId })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al crear la tarea' })
  }
}

export function partialModifyTask (req, res) {
  try {
    const { fieldToModify, value } = req.body
    const id = req.params.id
    const totalModifiedTasks = updateTask(id, fieldToModify, value)
    res.status(201).json({ totalModifiedTasks, modifiedTask: { id, fieldToModify, value } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar la tarea' })
  }
}

export function modifyTask (req, res) {
  try {
    const { fieldsToModify, values } = req.body
    const id = req.params.id
    const totalModifiedTasks = replaceTask(id, fieldsToModify, values)
    res.status(201).json({ totalModifiedTasks, modifiedTask: { id, fieldsToModify, values } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al modificar la tarea' })
  }
}

export function removeTask (req, res) {
  try {
    const id = req.params.id
    const { name } = req.body
    const totalRemovedTask = deleteTask(id)
    res.status(201).json({ totalRemovedTask, removedTask: { name } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Error al eliminar la tarea' })
  }
}
