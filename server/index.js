import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import chatRoute from './routes/chat.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/chat', chatRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
