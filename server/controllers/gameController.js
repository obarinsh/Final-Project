import pool from '../db/db.js'


export const getQuestionsByCategory = async (req, res) => {
    const { categoryId } = req.params
    try {
        const results = await pool.query('SELECT * FROM questions WHERE category_id=$1', [categoryId])
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'No questions found for this category' })
        }
        res.json(results.rows)
    }
    catch (error) {
        console.error('Error fetching questions:', error)
        res.status(500).json({ message: 'Failed to fetch questions' })
    }
}
