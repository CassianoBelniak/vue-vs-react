import { City } from '@/interfaces/city'
import { Weather } from '@/interfaces/wheater'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://belniak.com.br',
    timeout: 10000,
})

export async function searchCities(name: string) {
    if (!name) return []
    const response = await api.get<City[]>('/common/cities.php', { params: { name } })
    return response.data
}

export async function getLocationWheater(lat: string, lon: string) {
    const response = await api.get<Weather>('/common/current-weather.php', { params: { lat, lon } })
    return response.data
}
