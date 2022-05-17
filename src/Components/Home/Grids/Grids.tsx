import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchGetAllPosts } from '../../../app/Reducers/getPostsForum';
import { fetchAllTheorics } from '../../../app/Reducers/theoricSlice';
import { getAllExercises } from '../../../app/Reducers/exercisesSlice';

const imagesBlack = {
    theoric: 'https://res.cloudinary.com/henryask/image/upload/v1652816513/carrousel/theoricBlack_tkxpbo.png',
    exerc: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.13_PM_lx0pqb.jpg',
    post: 'https://res.cloudinary.com/henryask/image/upload/v1652815705/carrousel/postInsBlack_nap23t.png'
};

const imagesWhite = {
    theoric: 'https://res.cloudinary.com/henryask/image/upload/v1652816513/carrousel/theoricWhite_mtisgq.png',
    exerc: 'https://res.cloudinary.com/henryask/image/upload/v1652818309/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.14_PM_2_alwcwt.jpg',
    post: 'https://res.cloudinary.com/henryask/image/upload/v1652815292/carrousel/postInsWhite_dr8b4f.png'
};

export default function Grids() {
    const theme = useTheme();
    const [theoric, setTheoric] = useState([]);
    const post = useAppSelector((state: any) => state.getAllPosts);
    const exerc = useAppSelector((state) => state.exercises);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchGetAllPosts(10));
      fetchAllTheorics().then((res: any) => setTheoric(res));
      dispatch(getAllExercises());
    }, []);

    return (
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Card
                    sx={theme.palette.mode === 'dark' ? { backgroundImage:'none', padding:'.6rem'} : {background:'yellow', padding:'.6rem'}}>
                            <Typography
                            gutterBottom
                            variant="h4" 
                            component="div" 
                            display='flex'
                            justifyContent='center'
                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                {`+${theoric ? theoric.length : 0} Teóricos`}
                            </Typography>
                            <CardMedia
                            component="img"
                            image={theme.palette.mode === 'dark' ? imagesBlack.theoric : imagesWhite.theoric}
                            alt="Teoría"/>
                            <Typography variant="body2" sx={{padding:'1rem'}}>
                                Encontrarás contenido brindado por los y las instructores e instructoras de Henry para que puedas complementar tu cursada tanto del Prep Course como así también, del Bootcamp. Acrecentamos tus conocimientos 💛
                            </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none', padding:'.6rem'} : { background:'yellow', padding:'.6rem'}}>
                            <Typography
                            gutterBottom
                            variant="h4" 
                            component="div" 
                            display='flex'
                            justifyContent='center'
                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                {`+${exerc.exercises ? exerc.exercises.length : 0} Ejercicios`}
                            </Typography>
                            <CardMedia
                            component="img"
                            image={theme.palette.mode === 'dark' ? imagesBlack.exerc : imagesWhite.exerc}
                            alt="Ejercicios"
                            />
                            <Typography variant="body2" sx={{padding:'1rem'}}>
                                Sección dedicada a incrementar la práctica de lo que vayas aprendiendo en Henry. Los y las instructores e instructoras estarán compartiendo ejercicios para que puedas solucionarlos dentro de la plataforma😉
                            </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none', padding:'.6rem'} : { background:'yellow', padding:'.6rem'}}>
                            <Typography
                            gutterBottom
                            variant="h4" 
                            component="div"
                            display='flex'
                            justifyContent='center'
                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                {`+${post ? post.posts.length : 0} Posteos`}
                            </Typography>
                            <CardMedia
                            component="img"
                            image={theme.palette.mode === 'dark' ? imagesBlack.post : imagesWhite.post}
                            alt="Posteos"
                            />
                            <Typography variant="body2" sx={{padding:'1rem'}}>
                                Foro de discusión donde podrás despejar dudas y ayudar a la comunidad. Si tu respuesta al ayudar a un miembro de la comunidad es la más votada, recibirás una HenryCoin. Acumula y regala HenryCoin's para obtener beneficios🎉
                            </Typography>
                    </Card>
                </Grid>
          </Grid>
      </Paper>
    );
};