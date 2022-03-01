import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import { connectDb } from './db.js'
import { listUsers, registerUser } from './user.controller.js'

const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(json())

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)

  connectDb()

  app.post('/users', registerUser)
  app.get('/users', listUsers)
})
