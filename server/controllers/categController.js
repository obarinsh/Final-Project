import pool from '../db/db.js'

export const getAllCateg = async (req, res) => {

    try {
        const results = await pool.query('SELECT * FROM categories')
        res.json(results.rows)
    }
    catch (error) {
        console.error('Problem to fetch categories:', error)
        res.status(500).json({ message: 'Categories are not available' })
    }
}


export const getCategById = async (req, res) => {
    const { id } = req.params
    try {
        const results = await pool.query('SELECT * FROM categories WHERE id=$1', [id])
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Category is not found' })
        }
        res.json(results.rows[0])
    }
    catch (error) {
        console.error('Problem fetching category:', error)
        res.status(500).json({ message: 'Category is not available' })
    }
}
