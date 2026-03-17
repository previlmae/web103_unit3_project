import 'dotenv/config'
import { pool } from './database.js'

const createTables = async () => {
    try {
        await pool.query(`
            DROP TABLE IF EXISTS events;
            DROP TABLE IF EXISTS locations;

            CREATE TABLE locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                description TEXT
            );

            CREATE TABLE events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                description TEXT,
                date TIMESTAMP,
                location_id INTEGER REFERENCES locations(id)
            );
        `)

        console.log('Tables created successfully!')
        process.exit(0)
    } catch (error) {
        console.error('Error creating tables:', error)
        process.exit(1)
    }
}

createTables()