import { 
    Button,
    Grid,
    Paper,
    Typography,
    Card,
    CardActionArea,
    CardMedia
    } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { fetchGetAllPosts } from '../../app/Reducers/getPostsForum';
import bannerDefault from '../Profile/bannerDefault/bannerDefault.jpg';
import { StyledAvatar } from '../../Views/Profile';
import { useNavigate } from "react-router-dom";
import { TituloForo } from '../Style/StyledComponents';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function PosteosAlumnos(){
    const theme = useTheme();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const post = useAppSelector((state: any) => state.getAllPosts.posts);
    const userRole = useAppSelector((state) => state.user.data);
    const dispatch = useAppDispatch();
    let postAlumnos: Array<object> = [];
    let maxSteps: number;

    
    useEffect(() => {
        dispatch(fetchGetAllPosts(10));
    }, [userRole]);

    console.log(post)

    post.map((el: object | any) => {
        if(userRole.role === 2) {
            if (el.owner && el.owner.role === 2) {
              postAlumnos.push(el);
            }
        } else if(userRole.role === 1) {
            if(el.owner && el.owner.role === 1) {
                postAlumnos.push(el);
            }
        } else if(userRole.role > 3){
            if(el.owner.role > 1 && el.owner.role < 4){
                postAlumnos.push(el);
            }
        }
        return el;
    });

    let content = (step: string) => {
        let aux = step.split(' ');
        let aux1 = aux.slice(0, 80);
        let aux2 = aux1.join(' ');
        return aux2;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = () => {
        setActiveStep(activeStep);
    };

    function reverseArr(arr: Array<object>) {
        let ret = new Array;
        for(let i = arr.length-1; i >= 0; i-- ) {
            ret.push(arr[i]);
        }
        return ret;
    };

    maxSteps = reverseArr(postAlumnos).length ? reverseArr(postAlumnos).slice(0, 15).length : 1;

    return(
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Typography
            gutterBottom 
            variant="h2"
            textAlign='center'>
                Últimos posteos de <TituloForo>alumnos</TituloForo>
            </Typography>

            <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={9}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none'} : { background:'yellow'}}>
                        <CardActionArea>
                            <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}>
                                {reverseArr(postAlumnos).slice(0, 15).map((el) => (
                                    <Grid>
                                        <CardMedia
                                        component="img"
                                        image={el.owner.banner ? el.owner.banner : bannerDefault}
                                        alt={el.owner.user_name + " banner"}
                                        sx={{
                                        width: "100%",
                                        height: "20vh",}}
                                        />
                                        <Grid
                                        width="100%"
                                        display="flex"
                                        justifyContent="space-between"
                                        >
                                            <StyledAvatar
                                            alt={el.owner.first_name}
                                            src={el.owner.profile_picture.length>0? el.owner.profile_picture : el.owner.avatar ? el.owner.avatar : el.owner.profile_picture}
                                            />
                                        </Grid>
                                        <Grid sx={{ 
                                        height: 200, 
                                        display:'grid', 
                                        margin: '3rem',
                                        marginTop: '0rem',
                                        marginBottom: '0rem'}}>
                                            <Typography
                                            variant="h5" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='center'
                                            style={{ textDecoration: 'underline', fontSize: '2rem' }}
                                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                                {el.question}
                                            </Typography>
                                            <Typography
                                            display='flex'
                                            justifyContent='center'
                                            variant="subtitle1">
                                                {el.description.length >= 300 ? `${content(el.description)}...` : el.description}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                        sx={{ display:'flex', 
                                        justifyContent:'center',
                                        alignItems:'center'}}>
                                            <Typography
                                            variant="h6" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='center'>
                                                {`Por: ${el.owner.first_name.concat(` ${el.owner.last_name}`)} | ${el.owner.user_name}`}
                                            </Typography>
                                        </Grid>
                                        <Grid display='flex' justifyContent='center'>
                                            <Button
                                            onClick={() => navigate(`/Post/${el._id}`)}
                                            variant="contained" 
                                            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}><ArrowForwardIosIcon/></Button>
                                        </Grid>
                                    </Grid>
                                ))}
                            </AutoPlaySwipeableViews>

                            <MobileStepper
                            sx={{ backgroundColor: 'transparent' }}
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                        ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>}
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                        ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                </Button>}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    );
};