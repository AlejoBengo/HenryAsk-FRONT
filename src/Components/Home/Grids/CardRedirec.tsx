import {
    Typography, 
    useTheme,
    Button,
    Link,
    Grid, 
    Card, 
    Box } from '@mui/material';

export default function CardRedirect(){
    const theme = useTheme();

    return (
        <Box sx={{width: '100%', padding: '1rem'}} >
            <Grid container >
                <Grid item xs={12} sm={12}>
                    <Card sx={theme.palette.mode === "dark"
                    ? { backgroundImage: "black", width: '100%', height: '100%', padding: '3rem' }
                    : { background: "yellow", width: '100%', height: '100%', padding: '3rem'  }}>
                            <Typography
                                variant="h2"
                                display='flex'
                                justifyContent='center'
                                padding='3rem'
                                color={theme.palette.mode === "dark" ? "primary" : "secondary"}
                                >
                                👩🏽‍🚀¡Sumate a la comunidad!👨🏽‍🚀
                            </Typography>
                            <Box 
                            display='flex' 
                            justifyContent='center'>
                                <Link
                                href='https://www.soyhenry.com/'
                                rel="noopener" 
                                target="_blank">
                                    <Button
                                    color={theme.palette.mode === "dark" ? "primary" : "secondary"}
                                    variant='contained'
                                    >
                                        Aplica
                                    </Button>
                                </Link>
                            </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};