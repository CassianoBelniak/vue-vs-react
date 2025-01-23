import { City } from '@/interfaces/city'
import { Avatar, Card, CardHeader } from '@mui/material'

export default function CityCard(props: { city: City }) {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>R</Avatar>}
                title={props.city.name}
                subheader='September 14, 2016'></CardHeader>
        </Card>
    )
}
