import { queryTask, queryAllTasks, insertTask } from '../services/task.service.js'

export function getTasks (req, res) {
  const tasks = queryAllTasks()
  res.json(tasks)
}

export function getTask (req, res) {
  const task = queryTask()
  res.json(task)
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
