import { 
    CardActionArea, 
    Typography, 
    Button,
    Link,
    Grid, 
    Card, 
    Box } from '@mui/material';

export default function CardRedirect(){
    return (
        <Box sx={{width: '100%', padding: '1rem'}} >
            <Grid container >
                <Grid item xs={12} sm={12}>
                    {/* <Box></Box> */}
                    <Card sx={{ 
                        width: '100%', 
                        height: '100%',
                        padding: '3rem',
                        backgroundColor: 'yellow' }}>
                            <Typography
                                variant="h2"
                                display='flex'
                                justifyContent='center'
                                padding='3rem'
                                color='secondary'
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
                                    color= "secondary"
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