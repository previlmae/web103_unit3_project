import 'dotenv/config'
import { pool } from '../config/database.js'

export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations')
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
}