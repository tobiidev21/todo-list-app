import express from 'express'
import { userRoutes, taskRoutes } from './routes/index.js'

const app = express()

app.use(express.json())
app.use('/user', userRoutes) // http://localhost:3000/users
app.use('/task', taskRoutes) // http://localhost:3000/task
// app.use('/workspace', workspaceRoutes) // http://localhost:3000/workspace

export default app
