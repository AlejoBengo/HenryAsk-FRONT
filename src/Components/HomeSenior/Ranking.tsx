import { 
    Button,
    styled,
    Avatar,
    Grid,
    Paper,
    Typography,
    Card,
    Box,
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
import { fetchAllUsers } from '../../app/Utils/allUsers';
import bannerCoin from '../Profile/bannerDefault/bannerCoin.jpg';
import henryCoin from '../Profile/bannerDefault/henryCoin.jpeg';
import { useNavigate } from "react-router-dom";
import { TituloForo } from '../Style/StyledComponents';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LinkDom } from '../Style/StyledComponents';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StyledAvatar = styled(Avatar)(
    ({ theme }) => `
    position: relative;
    top: -10vh;
    left: 1em;
    width: 20vh;
    height: 20vh;
    border: 4px solid;
    border-color: ${theme.palette.primary.dark};
    margin-bottom:-10vh;
    margin-right: 10vh;
    z-index: 2;
    &:before{
      z-index: -1;
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${theme.palette.primary.light};
    }
    @media (max-width: 600px) {
      width:10vh;
      height:10vh;
      top: -5vh;
      margin-bottom:-5vh;
    }`
);

export default function Ranking(){
    const theme = useTheme();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const users = useAppSelector((state: any) => state.allUser.allUsers);
    let filterUsers = [...users].filter((el) => el.role === 2);
    let sortedUsers = filterUsers.sort((a, b) => a.give_henry_coin > b.give_henry_coin ? -1 : 1);
    const dispatch = useAppDispatch();
    let maxSteps: number;

    
    useEffect(() => {
        dispatch(fetchAllUsers);
    }, []);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = () => {
        setActiveStep(activeStep);
    };

    maxSteps = sortedUsers.length ? sortedUsers.slice(0, 15).length : 1;

    return(
        <Paper sx={{ padding: '1rem', margin: '2rem' }}>
            <Typography
            gutterBottom 
            variant="h2"
            textAlign='center'>
                Top #15 <TituloForo>Henry Coins</TituloForo>
            </Typography>

            <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={10}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none'} : { background:'yellow'}}>
                        <CardActionArea>
                            <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}>
                                {sortedUsers.map((el: any) => (
                                    <Grid>
                                        <CardMedia
                                        component="img"
                                        image={bannerCoin}
                                        alt={el.user_name + " banner"}
                                        sx={{
                                        width: "100%",
                                        height: "20vh"}}
                                        />
                                        <Grid
                                        width="100%"
                                        display="flex"
                                        justifyContent="flex-end">
                                            <StyledAvatar
                                            alt={el.first_name}
                                            src={el.profile_picture.length>0? el.profile_picture : el.avatar ? el.avatar : el.profile_picture}/>
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
                                                <LinkDom to={`/Profile/${el._id}`}>
                                                    {`${el.first_name.concat(` ${el.last_name}`)} | ${el.user_name}`}
                                                </LinkDom>
                                            </Typography>
                                            <Grid sx={{display:'flex', justifyContent:'flex-start'}}>
                                                <Box
                                                display="flex"
                                                justifyContent="space-around"
                                                alignItems="center"
                                                justifySelf="flex-start"
                                                sx={{ width: "100px" }}
                                                mt={1}>
                                                    <Avatar
                                                    src={henryCoin}
                                                    sx={{width:'5rem', height:'5rem', border: '2px solid', borderColor: 'yellow'}}>
                                                    </Avatar>
                                                </Box>
                                            </Grid>
                                            <Typography
                                            variant="h5" 
                                            component="div" 
                                            display='flex'
                                            justifyContent='space-around'
                                            sx={theme.palette.mode === 'dark' ? { color:'yellow', marginTop:'-3.5rem'} : { color:'black', marginTop:'-3.5rem'}}>
                                                {`Henry Coins: ${el.give_henry_coin}`}
                                            </Typography>
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

            <Grid sx={{display:'flex', justifyContent:'center', padding:'.6rem'}}>
                <Button
                onClick={() => navigate(`/Ranking`)}
                variant="contained" 
                sx={{marginTop: '1rem'}}
                color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}>
                    Ver ranking completo🏆
                </Button>
            </Grid>
        </Paper>
    );
};