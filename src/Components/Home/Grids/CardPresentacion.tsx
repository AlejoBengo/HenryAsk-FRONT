import { 
    Typography,
    Grid, 
    Paper, 
    useTheme} from '@mui/material';
import { TituloForo } from '../../Style/StyledComponents';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagesBlack = [
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.10_PM_zateiq.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804276/carrousel/WhatsApp_Image_2022-05-16_at_9.17.11_PM_1_ts3xxn.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.13_PM_lx0pqb.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.11_PM_dvhqfd.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.13_PM_1_cr400e.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.12_PM_hyt09a.jpg'
  },
  {
    imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652804277/carrousel/WhatsApp_Image_2022-05-16_at_9.17.12_PM_1_hkr2e6.jpg'
  }
];

const imagesWhite = [
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652823780/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.13_PM_3_z3quad.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652818308/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.14_PM_1_l0ze5s.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652823780/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.13_PM_3_z3quad.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652818309/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.13_PM_2_quca7s.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652818308/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.13_PM_tmtc6f.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652818309/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.13_PM_1_orzolo.jpg'
    },
    {
      imgPath: 'https://res.cloudinary.com/henryask/image/upload/v1652818309/carrousel/lightMode/WhatsApp_Image_2022-05-17_at_4.39.14_PM_ey1jzo.jpg'
    }
];

export default function CardPresentacion(){
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagesBlack.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return(
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Grid container>
                <Grid item xs={12} sm={4} sx={{padding:'3rem', paddingRight:'.5rem'}}>
                    <Typography
                    variant="h3" 
                    display='flex'
                    justifyContent='flex-start'
                    padding='1rem'>
                        <TituloForo>Henry Ask</TituloForo>
                    </Typography>
                    <Typography
                    variant="h5"
                    display='flex'
                    justifyContent='flex-start'
                    padding='1rem'>
                        Resuelve dudas y consultas.
                    </Typography>
                    <Typography
                    variant='body1'
                    padding='1rem'>
                        Contenido teórico y práctico para incrementar tus conocimientos.<br/>
                        Foro de discusión para alumnos e instructores.<br/>
                        ¿Y lo mejor? Recibe recompensas por ayudar a la comunidad🚀
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} sx={{padding:'.7rem', paddingLeft:'0rem', height:'100%', width:'100%'}}>
                    <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}>
                    {theme.palette.mode === 'dark' 
                        ? (imagesBlack.map((step, index) => (
                         Math.abs(activeStep - index) <= 2 ? (
                            <Grid
                                component="img"
                                src={step.imgPath}
                                sx={{
                                    height:'98%',
                                    width:'100%',
                                }}/>
                        ) : null ))) 
                        : (imagesWhite.map((step, index) => (
                            Math.abs(activeStep - index) <= 2 ? (
                            <Grid
                                component="img"
                                src={step.imgPath}
                                sx={{
                                    height:'98%',
                                    width:'100%',
                                }}/>
                            ) : null )))}
                    </AutoPlaySwipeableViews>
                <MobileStepper
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
                    }/>
                </Grid>
            </Grid>
        </Paper>
    )
};