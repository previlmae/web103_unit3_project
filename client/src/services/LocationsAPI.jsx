const API_URL = '/api/locations'

const getAllLocations = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

const LocationsAPI = { getAllLocations }

export default LocationsAPI