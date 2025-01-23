import useCities from '@/stores/useCities'
import CityCard from '../CityCard'

export default function CityList() {
    const { cities, removeCity } = useCities()
    return cities.map(city => (
        <CityCard
            onRemoveCity={() => removeCity(city)}
            city={city}
            key={city.id_city}
        />
    ))
}
