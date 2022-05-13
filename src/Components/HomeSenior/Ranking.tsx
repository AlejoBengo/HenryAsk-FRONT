import { Container, Typography, Paper, Grid } from '@mui/material';

export default function Ranking(){
    return(
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        display="flex"
                        justifyContent="center"
                    >
                        Acá va un ranking de Henry Coins
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};