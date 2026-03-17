const API_URL = '/api/events'

const getAllEvents = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

const getEventsByLocation = async (locationId) => {
    const response = await fetch(`${API_URL}/location/${locationId}`)
    const data = await response.json()
    return data
}

const EventsAPI = { getAllEvents, getEventsByLocation }

export default EventsAPI