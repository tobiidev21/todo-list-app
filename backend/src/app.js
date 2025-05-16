import express from 'express'
import cors from 'cors'
import { userRoutes, taskRoutes, workspaceRoutes } from './routes/index.js'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use('/user', userRoutes) // http://localhost:3000/user
app.use('/task', taskRoutes) // http://localhost:3000/task
app.use('/workspace', workspaceRoutes) // http://localhost:3000/workspace

export default app
