import { getLocationWheater } from '@/apis/backend'
import { City } from '@/interfaces/city'
import { Weather } from '@/interfaces/wheater'
import { Close } from '@mui/icons-material'
import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'

export default function CityCard(props: { city: City; onRemoveCity: () => void }) {
    const [weather, setWeather] = useState<Weather>()
    useEffect(() => {
        getLocationWheater(props.city.latitude, props.city.longitude).then(setWeather)
    }, [])
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}>R</Avatar>}
                action={
                    <IconButton
                        aria-label='settings'
                        onClick={props.onRemoveCity}>
                        <Close />
                    </IconButton>
                }
                title={props.city.name}
                subheader={`${Math.round(weather?.main.temp || 0)}°`}></CardHeader>
        </Card>
    )
}
