import express from 'express'
import cookieParser from 'cookie-parser'
import user_routes from './routes/user_routes.js'
import categ_routes from './routes/categ_routes.js'
import game_routes from './routes/game_routes.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth', user_routes)
app.use('/api/categories', categ_routes)
app.use('/api/game', game_routes)

app.get('/', (req, res) => {
    res.send('API is running')
})
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})