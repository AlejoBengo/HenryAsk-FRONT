import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid';
import darkMode from './darkMode.jpeg';
import editProfile from './editProfile.jpeg';
import material from './material.jpeg';
import posteosIn from './posteosIn.jpeg';
import profile from './profile.jpeg';
import askLogo from './askLogo.gif';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: profile
  },
  {
    imgPath: editProfile
  },
  {
    imgPath: posteosIn
  },
  {
    imgPath: material
  },
  {
    imgPath: darkMode
  }
];

export default function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
      <Box sx={{ margin: '50px', height: '70vh' }}>
          <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                  <Box
                    component='img'
                    sx={{
                        display: 'block',
                        overflow: 'hidden',
                        height: '100%',
                        width: '100%'
                    }}
                    src={askLogo}></Box>
                </Grid>
              <Grid item xs={12} sm={8}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        Math.abs(activeStep - index) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                            height: 400,
                            display: 'block',
                            overflow: 'hidden',
                            width: '100%',
                            }}
                            src={step.imgPath}
                        />
                        ) : null
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
          </Grid>
    </Box>
  );
};