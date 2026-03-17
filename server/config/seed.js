import 'dotenv/config'
import { pool } from './database.js'

const seedDatabase = async () => {
    try {
        await pool.query(`
            INSERT INTO locations (name, description) VALUES
            ('Echo Lounge', 'A cozy music venue for indie artists'),
            ('House of Blues', 'Live music and entertainment'),
            ('Pavilion', 'Outdoor concert and event space'),
            ('American Airlines Center', 'Major sports and entertainment arena');

            INSERT INTO events (name, description, date, location_id) VALUES
            ('Jazz Night', 'Live jazz performances', '2026-04-01 20:00:00', 1),
            ('Open Mic', 'Local artists showcase', '2026-04-15 19:00:00', 1),
            ('Blues Festival', 'Annual blues music festival', '2026-04-10 18:00:00', 2),
            ('Rock Concert', 'Live rock bands', '2026-05-01 21:00:00', 2),
            ('Summer Concert', 'Outdoor summer music event', '2026-06-15 17:00:00', 3),
            ('Food & Music Festival', 'Food trucks and live music', '2026-05-20 12:00:00', 3),
            ('Basketball Game', 'NBA playoff game', '2026-04-20 19:30:00', 4),
            ('Championship Concert', 'World tour stop', '2026-05-10 20:00:00', 4);
        `)

        console.log('Database seeded successfully!')
        process.exit(0)
    } catch (error) {
        console.error('Error seeding database:', error)
        process.exit(1)
    }
}

seedDatabase()