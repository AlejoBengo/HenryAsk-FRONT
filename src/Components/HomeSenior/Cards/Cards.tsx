import { 
    Card, 
    Typography, 
    CardActionArea, 
    Grid, 
    Paper, 
    Avatar,
    Button,
    Box}from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { TituloForo } from '../../Style/StyledComponents';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchAllTheorics } from "../../../app/Reducers/theoricSlice";
import { fetchGetAllPosts } from "../../../app/Reducers/getPostsForum";
import { getAllExercises } from "../../../app/Reducers/exercisesSlice";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Grids() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [theoric, setTheoric] = useState([]);
    const post = useAppSelector((state: any) => state.getAllPosts.posts);
    const exerc = useAppSelector((state) => state.exercises);
    const dispatch = useAppDispatch();
    let [activeStep, setActiveStep] = useState(0);
    let [activeStep1, setActiveStep1] = useState(0);
    let [activeStep2, setActiveStep2] = useState(0);
    let postInstructores: Array<object> = [];
    let maxSteps: number;
    let maxSteps1: number;
    let maxSteps2: number;

    useEffect(() => {
        dispatch(fetchGetAllPosts(10));
        fetchAllTheorics().then((res: any) => setTheoric(res));
        dispatch(getAllExercises());
    }, []);


    let content = (step: string) => {
        let aux = step.split(' ');
        let aux1 = aux.slice(0, 60);
        let aux2 = aux1.join(' ');
        return aux2;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleNext1 = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleNext2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBack1 = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBack2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = () => {
        setActiveStep(activeStep);
    };

    const handleStepChange1 = () => {
        setActiveStep1(activeStep1);
    };

    const handleStepChange2 = () => {
        setActiveStep2(activeStep2);
    };

    function reverseArr(arr: Array<object>) {
        let ret = new Array;
        for(let i = arr.length-1; i >= 0; i-- ) {
            ret.push(arr[i]);
        }
        
        return ret;
    };

    post.map((el: object | any) => {
        if (el.owner && el.owner.role >= 4) {
          postInstructores.push(el);
        }
        return el;
    });

    maxSteps = reverseArr(theoric).length ? reverseArr(theoric).slice(0,6).length : 1;
    maxSteps1 = reverseArr(exerc.exercises).length ? reverseArr(exerc.exercises).slice(0,6).length : 1;
    maxSteps2 = reverseArr(postInstructores).length ? reverseArr(postInstructores).slice(0,6).length : 1;


    return (
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Typography
            gutterBottom 
            variant="h2" 
            textAlign='center'>
                Última actividad de <TituloForo>instructores</TituloForo>
            </Typography>

            <Grid container spacing={5} padding='2rem'>
                <Grid item xs={12} sm={4}>
                    <Typography 
                    gutterBottom 
                    variant="h4" 
                    component="div" 
                    display='flex'
                    justifyContent='center'>
                        Teoría
                    </Typography>

                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none'} : { background:'yellow'}}>
                        <CardActionArea>
                            <AutoPlaySwipeableViews
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents>
                                {reverseArr(theoric).slice(0, 6).map((el: any) => (
                                    <Grid>
                                        <Grid sx={{ height: 350, display:'grid', padding:'1rem' }}>
                                            <Typography
                                            variant="h5" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='center'
                                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                                {el.title}
                                            </Typography>
                                            
                                            <Typography
                                            display='flex'
                                            justifyContent='center'
                                            variant="subtitle1">
                                                {el.content.length >= 200 ? `${content(el.content)}...` : el.content}
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
                                                    {`Por: ${el.author }`}
                                                </Typography>
                                                <Avatar
                                                sx={{ margin: '0.5rem'}}
                                                alt={el.owner.first_name}
                                                src={el.owner.profile_picture.length > 0
                                                ? el.owner.profile_picture
                                                : el.owner.avatar
                                                ? el.owner.avatar
                                                : "/static/images/avatar/2.jpg"}/>
                                            </Grid>
                                        <Grid display='flex' justifyContent='center'>
                                            <Button
                                            onClick={() => navigate(`/Theoric/${el._id}`)}
                                            variant="contained" 
                                            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}><ArrowForwardIosIcon /></Button>
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
                                            <KeyboardArrowRight />)
                                        }
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

                    <Grid item xs={12} sm={4}>
                        <Typography 
                        gutterBottom 
                        variant="h4" 
                        component="div" 
                        display='flex'
                        justifyContent='center'>
                            Ejercicios
                        </Typography>

                        <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none'} : { background:'yellow'}}>
                            <CardActionArea>
                                <AutoPlaySwipeableViews
                                index={activeStep1}
                                onChangeIndex={handleStepChange1}
                                enableMouseEvents>
                                {reverseArr(exerc.exercises).slice(0, 6).map((el: any) => (
                                    <Grid>
                                        <Grid sx={{ height: 350, display:'grid', padding:'1rem' }}>
                                            <Typography
                                            variant="h5" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='center'
                                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                                {el.title}
                                            </Typography>
                                            <Typography
                                            display='flex'
                                            justifyContent='center'
                                            variant="subtitle1">
                                                {el.description.length >= 200 ? `${content(el.description)}...` : el.description}
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
                                                {`Por: ${el.owner.first_name.concat(` ${el.owner.last_name}`)}`}
                                            </Typography>
                                            <Avatar
                                            sx={{ margin: '0.5rem'}}
                                            alt={el.owner.first_name}
                                            src={el.owner.profile_picture.length > 0
                                            ? el.owner.profile_picture
                                            : el.owner.avatar
                                            ? el.owner.avatar
                                            : "/static/images/avatar/2.jpg"}/>
                                        </Grid>
                                        <Grid display='flex' justifyContent='center'>
                                            <Button
                                            onClick={() => navigate(`/Exercise/${el._id}`)}
                                            variant="contained" 
                                            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}><ArrowForwardIosIcon /></Button>
                                        </Grid>
                                    </Grid>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                sx={{ backgroundColor: 'transparent' }}
                                steps={maxSteps1}
                                position="static"
                                activeStep={activeStep1}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext1}
                                        disabled={activeStep1 === maxSteps1 - 1}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                            ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>}
                                backButton={
                                    <Button size="small" onClick={handleBack1} disabled={activeStep1 === 0}>
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

                    <Grid item xs={12} sm={4}>
                        <Typography 
                        gutterBottom 
                        variant="h4" 
                        component="div" 
                        display='flex'
                        justifyContent='center'>
                            Posteos
                        </Typography>
                        <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none'} : { background:'yellow'}}>
                            <CardActionArea>
                                <AutoPlaySwipeableViews
                                index={activeStep2}
                                onChangeIndex={handleStepChange2}
                                enableMouseEvents>
                                {reverseArr(postInstructores).slice(0, 6).map((el: any) => (
                                    <Grid>
                                        <Grid sx={{ height: 350, display:'grid', padding:'1rem' }}>
                                            <Typography
                                            variant="h5" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='center'
                                            sx={theme.palette.mode === 'dark' ? { color:'yellow'} : { color:'black'}}>
                                                {el.question}
                                            </Typography>
                                            <Typography
                                            display='flex'
                                            justifyContent='center'
                                            variant="subtitle1">
                                                {el.description.length >= 200 ? `${content(el.description)}...` : el.description}
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
                                                    {`Por: ${el.owner ? el.owner.first_name.concat(` ${el.owner.last_name}`) : undefined}`}
                                                </Typography>
                                                <Avatar
                                                sx={{ margin: '0.5rem'}}
                                                alt={el.owner.first_name}
                                                src={el.owner.profile_picture.length > 0
                                                ? el.owner.profile_picture
                                                : el.owner.avatar
                                                ? el.owner.avatar
                                                : "/static/images/avatar/2.jpg"}/>
                                            </Grid>
                                        <Grid display='flex' justifyContent='center'>
                                            <Button
                                            onClick={() => navigate(`/Post/${el._id}`)}
                                            variant="contained" 
                                            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}><ArrowForwardIosIcon /></Button>
                                        </Grid>
                                    </Grid>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                sx={{ backgroundColor: 'transparent' }}
                                steps={maxSteps2}
                                position="static"
                                activeStep={activeStep2}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext2}
                                        disabled={activeStep2 === maxSteps2 - 1}>
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowLeft />
                                                ) : (
                                                <KeyboardArrowRight />
                                            )}
                                    </Button>}
                                backButton={
                                    <Button size="small" onClick={handleBack2} disabled={activeStep2 === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                            ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                    </Button>
                                }
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    );
};