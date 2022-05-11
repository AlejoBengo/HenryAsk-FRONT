import { 
    CardActionArea, 
    CardContent, 
    Typography, 
    Container, 
    Button,
    Link,
    Grid, 
    Card, 
    Box } from '@mui/material';
    import { useNavigate } from 'react-router-dom';


export default function CardRedirect(){
    const navigate = useNavigate();

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
                        <CardActionArea>
                            <Typography
                                variant="h2" 
                                component="div" 
                                display='flex'
                                justifyContent='center'
                                padding='3rem'
                                color='secondary'
                                >
                                ¡Sumate a la comunidad!
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
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}