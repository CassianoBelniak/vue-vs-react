'use client'
import useCities from '@/stores/useCities'
import { Paper } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [40, 50],
})

export default function PointMap() {
    const { cities } = useCities()
    return (
        <Paper sx={{ width: '100%', height: '100%', backgroundColor: 'green' }}>
            <MapContainer
                center={[-47.9292, -15.7801]}
                zoom={6}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {cities.map(city => (
                    <Marker
                        key={city.id_city}
                        position={[city.latitude, city.longitude]}
                        icon={icon}>
                        <Popup>{city.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Paper>
    )
}
