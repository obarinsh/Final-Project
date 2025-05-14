import express from 'express'
import cookieParser from 'cookie-parser'
import user_routes from './routes/user_routes.js'
import categ_routes from './routes/categ_routes.js'
import game_routes from './routes/game_routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'


dotenv.config()

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))


app.use(express.json())
app.use(cookieParser())

// CORS configuration - only needed for development
if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }))
}

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/client/dist')))

app.use('/api/auth', user_routes)
app.use('/api/categories', categ_routes)
app.use('/api/game', game_routes)

// Serve React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/client/dist', 'index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})