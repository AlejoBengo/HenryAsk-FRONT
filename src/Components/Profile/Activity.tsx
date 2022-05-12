import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProfile } from "../../app/Reducers/userProfileSlice";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { TituloForo } from '../Style/StyledComponents';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Activity() {
    const theme = useTheme();
    let userProfile = useAppSelector((state) => state.profile.profile);
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeStep1, setActiveStep1] = React.useState(0);
    const [activeStep2, setActiveStep2] = React.useState(0);
    const maxSteps = userProfile.posts.length;
    const maxSteps1 = userProfile.answers.length;
    const maxSteps2 = userProfile.comments.length;
    const { id }: any = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchProfile(id));
    }, [dispatch, id]);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleNext1 = () => {
        setActiveStep1((prevActiveStep1) => prevActiveStep1 + 1);
    };
    const handleNext2 = () => {
        setActiveStep2((prevActiveStep2) => prevActiveStep2 + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleBack1 = () => {
        setActiveStep1((prevActiveStep1) => prevActiveStep1 - 1);
    };
    const handleBack2 = () => {
        setActiveStep2((prevActiveStep2) => prevActiveStep2 - 1);
    };
    
    const handleStepChange = (step: number) => {
        setActiveStep(activeStep);
    };
    const handleStepChange1 = (step: number) => {
        setActiveStep1(activeStep1);
    };
    const handleStepChange2 = (step: number) => {
        setActiveStep2(activeStep2);
    };
    

    return (
        <Box sx={{height: '30vh' }}>
            <Grid>
                <TituloForo>
                    <Typography
                        variant="h2"
                        display='flex'
                        justifyContent='center'
                        padding='2rem'>
                            Actividad
                    </Typography>
                </TituloForo>
            </Grid>
            <Grid container spacing={5} height='50vh' padding='10px'>
                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display='flex'
                    justifyContent='center'
                    padding='2rem'>
                        Posteos
                    </Typography>
                    <AutoPlaySwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {userProfile.posts.map((step: any, index: any) => (
                            <Box
                                sx={{
                                height: 300,
                                display: 'block',
                                overflow: 'hidden',
                                width: '100%',
                            }}>

                                <Grid sx={{ height: 230, display:'grid' }}>
                                    <Typography
                                    variant="h5" 
                                    component="div" 
                                    display='flex'
                                    justifyContent='center'>
                                        {step.question}
                                    </Typography>
                                        <Typography
                                        display='flex'
                                        justifyContent='center'
                                        variant="subtitle1"
                                        >
                                            {step.description}
                                        </Typography>
                                </Grid>
                                <Grid display='flex' justifyContent='center' paddingBottom='0.5rem'>
                                    {`Fecha: 
                                        ${step.createdAt.slice(0, 10)}${' '}
                                        Hora:${step.createdAt.slice(12, 20)}`
                                    }
                                </Grid>
                                <Grid display='flex' justifyContent='center'>
                                    <Button
                                    onClick={() => navigate(`/Post/${step._id}`)}
                                    variant="contained" 
                                    color="primary" 
                                    sx={{height:"10%"}}>Ir</Button>
                                </Grid>
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                        </Button>
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display='flex'
                    justifyContent='center'
                    padding='2rem'>
                        Respuestas
                    </Typography>
                    <AutoPlaySwipeableViews
                        index={activeStep1}
                        onChangeIndex={handleStepChange1}
                        enableMouseEvents
                    >
                        {userProfile.answers.map((step: any, index: any) => (
                            <Box
                                sx={{
                                height: 300,
                                display: 'block',
                                overflow: 'hidden',
                                width: '100%',
                            }}>

                                <Grid sx={{ height: 230, display:'grid' }}>
                                    <Grid sx={{ 
                                        display:'flex', 
                                        justifyContent:'center',
                                        alignItems:'center'}}>
                                        <Avatar
                                        alt={userProfile.first_name}
                                        src={
                                        userProfile.profile_picture.length > 0
                                            ? userProfile.profile_picture
                                            : userProfile.avatar
                                            ? userProfile.avatar
                                            : "/static/images/avatar/2.jpg"
                                        }
                                        />
                                    </Grid>
                                    <Typography
                                    display='flex'
                                    justifyContent='center'
                                    variant="subtitle1"
                                    >
                                        {step.content}
                                    </Typography>
                                </Grid>
                                <Grid display='flex' justifyContent='center' paddingBottom='0.5rem'>
                                    {`Fecha: 
                                        ${step.createdAt.slice(0, 10)}${' '}
                                        Hora:${step.createdAt.slice(12, 20)}`
                                    }
                                </Grid>
                                <Grid display='flex' justifyContent='center'>
                                    <Button
                                    onClick={() => navigate(`/Post/${step.post}`)}
                                    variant="contained" 
                                    color="primary" 
                                    sx={{height:"10%"}}>Ir</Button>
                                </Grid>
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps1}
                        position="static"
                        activeStep={activeStep1}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext1}
                            disabled={activeStep1 === maxSteps1 - 1}
                        >
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack1} disabled={activeStep1 === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                        </Button>
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display='flex'
                    justifyContent='center'
                    padding='2rem'>
                        Comentarios
                    </Typography>
                    <AutoPlaySwipeableViews
                        index={activeStep2}
                        onChangeIndex={handleStepChange2}
                        enableMouseEvents
                    >
                        {userProfile.comments.map((step: any, index: any) => (
                            <Box
                                sx={{
                                height: 300,
                                display: 'block',
                                overflow: 'hidden',
                                width: '100%',
                            }}>
                                <Grid sx={{ height: 230, display: 'grid' }}>
                                    <Grid sx={{ 
                                        display:'flex', 
                                        justifyContent:'center',
                                        alignItems: 'center'}}>
                                        <Avatar
                                        alt={userProfile.first_name}
                                        src={
                                        userProfile.profile_picture.length > 0
                                            ? userProfile.profile_picture
                                            : userProfile.avatar
                                            ? userProfile.avatar
                                            : "/static/images/avatar/2.jpg"
                                        }
                                        />
                                    </Grid>
                                    <Typography
                                    display='flex'
                                    justifyContent='center'
                                    variant="subtitle1"
                                    >
                                        {step.content}
                                    </Typography>
                                </Grid>
                                <Grid display='flex' justifyContent='center' paddingBottom='0.5rem'>
                                    {`Fecha: 
                                        ${step.createdAt.slice(0, 10)}${' '}
                                        Hora:${step.createdAt.slice(12, 20)}`
                                    }
                                </Grid>
                                <Grid display='flex' justifyContent='center'>
                                    <Button
                                    // onClick={() => navigate(`/Post/${step.answer}`)}
                                    variant="contained" 
                                    color="primary" 
                                    sx={{height:"10%"}}>Ir</Button>
                                </Grid>
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps2}
                        position="static"
                        activeStep={activeStep2}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext2}
                            disabled={activeStep2 === maxSteps2 - 1}
                        >
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
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
                </Grid>
            </Grid>
        </Box>
    );
};