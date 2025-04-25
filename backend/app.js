import express from 'express'
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use('/users', userRoutes) // http://localhost:3000/users

export default app
