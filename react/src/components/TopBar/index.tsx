import { AppBar, Toolbar, Typography } from '@mui/material'

export default function TopBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1 }}>
                    Onde está todo mundo?
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
