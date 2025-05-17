import pkg from 'pg'
const { Pool } = pkg
import dotenv from 'dotenv'

dotenv.config()

// Validate environment variables
if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined in environment variables')
    process.exit(1)
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

// Connection event handlers
pool.on('connect', () => {
    console.log('Successfully connected to PostgreSQL database')
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err)
    process.exit(1)
})

// Test the connection
const testConnection = async () => {
    try {
        const client = await pool.connect()
        console.log('Database connection test successful')
        client.release()
    } catch (err) {
        console.error('Database connection test failed:', err.message)
        console.error('Error details:', {
            code: err.code,
            detail: err.detail,
            hint: err.hint,
            position: err.position,
            where: err.where
        })
        process.exit(1)
    }
}

// Run the connection test
testConnection()

export default pool