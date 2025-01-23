'use client'
import CityList from '@/components/CityList'
import CityPicker from '@/components/CityPicker'
import TopBar from '@/components/TopBar'
import { Box, Grid2 } from '@mui/material'

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TopBar />
            <Grid2 container>
                <Grid2
                    container
                    size={4}>
                    <Grid2>
                        <CityPicker />
                    </Grid2>
                    <Grid2>
                        <CityList />
                    </Grid2>
                </Grid2>
                <Grid2 size={8}></Grid2>
            </Grid2>
        </Box>
    )
}
