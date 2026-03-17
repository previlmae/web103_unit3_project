import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])

        useEffect(() => {
    (async () => {
        try {
            const eventsData = await EventsAPI.getEventsByLocation(index)
            setEvents(eventsData)
        }
        catch (error) {
            throw error
        }
    }) ()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={new Date(event.date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        />
   
                    ) : <h2>No events scheduled at this location yet!</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents