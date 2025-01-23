import { City } from '@/interfaces/city'
import { create } from 'zustand'

interface CitiesState {
    cities: City[]
    addCity: (city: City) => void
}

const useCities = create<CitiesState>(set => ({
    cities: [] as City[],
    addCity: (city: City) =>
        set(state => ({
            cities: [...state.cities.filter(filteredCity => filteredCity.id_city !== city.id_city), city],
        })),
}))

export default useCities
