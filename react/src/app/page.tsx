'use client'
import CityList from '@/components/CityList'
import CityPicker from '@/components/CityPicker'
import TopBar from '@/components/TopBar'
import { Box, Grid2 } from '@mui/material'
import dynamic from 'next/dynamic'

const PointMap = dynamic(() => import('@/components/PointMap'), { ssr: false })

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1, height: '100%' }}>
            <TopBar />
            <Grid2
                container
                sx={{ height: '100%' }}>
                <Grid2
                    direction='column'
                    container
                    size={4}>
                    <Grid2>
                        <CityPicker />
                    </Grid2>
                    <Grid2 direction='column'>
                        <CityList />
                    </Grid2>
                </Grid2>
                <Grid2 size={8}>
                    <PointMap />
                </Grid2>
            </Grid2>
        </Box>
    )
}
