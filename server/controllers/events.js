import 'dotenv/config'
import { pool } from '../config/database.js'

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events')
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
}

export const getEventsByLocation = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [id])
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
}