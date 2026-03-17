import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div>
            <h2>All Events</h2>
            {events && events.length > 0 
                ? events.map(event => (
                    <div key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</p>
                    </div>
                )) 
                : <h2>No events yet!</h2>
            }
        </div>
    )
}

export default Events