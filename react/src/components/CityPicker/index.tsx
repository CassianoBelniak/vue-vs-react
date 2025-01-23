import { searchCities } from '@/apis/backend'
import { City } from '@/interfaces/city'
import useCities from '@/stores/useCities'
import { Autocomplete, TextField } from '@mui/material'
import debounce from 'debounce'
import { SyntheticEvent, useState } from 'react'

export default function CityPicker() {
    const [city, setCity] = useState<City | null>(null)
    const [foundCities, setFoundCities] = useState<City[]>([])
    const { addCity } = useCities()

    const deboucedCityUpdate = debounce((newValue: string) => {
        searchCities(newValue).then(setFoundCities)
    }, 300)

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (city) {
            addCity(city)
        }
        setCity(null)
    }

    return (
        <form onSubmit={onSubmit}>
            <Autocomplete
                value={city}
                onChange={(event: SyntheticEvent, newValue: City | null) => setCity(newValue)}
                disablePortal
                options={foundCities}
                getOptionLabel={option => option.name}
                sx={{ width: 300 }}
                filterOptions={x => x}
                renderInput={params => (
                    <TextField
                        {...params}
                        onChange={event => deboucedCityUpdate(event.target.value)}
                        label='Cidade'
                    />
                )}
            />
        </form>
    )
}
