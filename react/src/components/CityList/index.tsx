import useCities from '@/stores/useCities'
import CityCard from '../CityCard'

export default function CityList() {
    const { cities } = useCities()
    return cities.map(city => (
        <CityCard
            city={city}
            key={city.id_city}
        />
    ))
}
