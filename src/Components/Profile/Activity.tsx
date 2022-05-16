import { Paper, Typography, Grid, Avatar, Card } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProfile } from "../../app/Reducers/userProfileSlice";
import { fetchGetAllPosts } from "../../app/Reducers/getPostsForum";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { TituloForo } from "../Style/StyledComponents";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Activity() {
    const theme = useTheme();
    let userProfile = useAppSelector((state) => state.profile.profile);
    // let post = useAppSelector((state: any) => state.getAllPosts.posts);
    let [activeStep, setActiveStep] = React.useState(0);
    const [activeStep1, setActiveStep1] = React.useState(0);
    const [activeStep2, setActiveStep2] = React.useState(0);
    let maxSteps: number;
    let maxSteps1: number;
    let maxSteps2: number;
    const { id }: any = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProfile(id));
        // dispatch(fetchGetAllPosts(10));
        setActiveStep((activeStep = 0));
    }, [dispatch, id]);


    let content = (step: string) => {
        let aux = step.split(" ");
        let aux1 = aux.slice(0, 20);
        let aux2 = aux1.join(" ");
        return aux2;
    };

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
        let ret = new Array();
        for (let i = arr.length - 1; i >= 0; i--) {
        ret.push(arr[i]);
        }
        return ret;
    };

    maxSteps = reverseArr(userProfile.posts).length
    ? reverseArr(userProfile.posts).slice(0, 6).length
    : 1;
    maxSteps1 = reverseArr(userProfile.answers).length
    ? reverseArr(userProfile.answers).slice(0, 6).length
    : 1;
    maxSteps2 = reverseArr(userProfile.comments).length
    ? reverseArr(userProfile.comments).slice(0, 6).length
    : 1;

    console.log(userProfile)

    return (
        <Paper>
            <Grid>
                <Typography
                variant="h2"
                display="flex"
                justifyContent="center"
                padding="2rem">
                    <TituloForo>Actividad</TituloForo>
                </Typography>
            </Grid>

            <Grid container spacing={5} padding="10px">
                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display="flex"
                    justifyContent="center"
                    padding="2rem">
                        <TituloForo>Posteos</TituloForo>
                    </Typography>

                    <Card
                    sx={theme.palette.mode === "dark"
                    ? { backgroundImage: "none" }
                    : { background: "yellow" }}>
                        <AutoPlaySwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}>
                            {reverseArr(userProfile.posts).slice(0, 6).map((step: any) => (
                                <Grid>
                                    <Grid sx={{ height: 230, display: "grid", padding: "1rem" }}>
                                        <Typography
                                        variant="h5"
                                        component="div"
                                        display="flex"
                                        justifyContent="center">
                                            {step.question.length >= 100
                                            ? `${content(step.question)}...`
                                            : step.question}
                                        </Typography>
                                        <Typography
                                        display="flex"
                                        justifyContent="center"
                                        variant="subtitle1">
                                            {step.description.length >= 100
                                            ? `${content(step.description)}...`
                                            : step.description}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                    display="flex"
                                    justifyContent="center"
                                    paddingBottom="0.5rem">
                                        {`Realizado:${step.createdAt.slice(0, 10)}`}
                                    </Grid>
                                    <Grid display="flex" justifyContent="center">
                                        <Button
                                        onClick={() => navigate(`/Post/${step._id}`)}
                                        variant="contained"
                                        color={theme.palette.mode === "dark" ? "primary" : "secondary"}
                                        sx={{ height: "10%" }}>
                                            Ir
                                        </Button>
                                    </Grid>
                                </Grid>
                            ))}
                        </AutoPlaySwipeableViews>

                        <MobileStepper
                        sx={{ backgroundColor: "transparent" }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}>
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}>
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                            </Button>
                        }/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display="flex"
                    justifyContent="center"
                    padding="2rem" >
                        <TituloForo>Respuestas</TituloForo>
                    </Typography>

                    <Card
                    sx={theme.palette.mode === "dark"
                    ? { backgroundImage: "none" }
                    : { background: "yellow" }}>
                        <AutoPlaySwipeableViews
                        index={activeStep1}
                        onChangeIndex={handleStepChange1}>
                            {reverseArr(userProfile.answers).slice(0, 6).map((step: any) => (
                                <Grid>
                                    <Grid sx={{ height: 230, display: "grid", padding: "1rem" }}>
                                        <Grid
                                        sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        }}>
                                            <Avatar
                                            alt={userProfile.first_name}
                                            src={userProfile.profile_picture?.length > 0
                                            ? userProfile.profile_picture
                                            : userProfile.avatar
                                            ? userProfile.avatar
                                            : "/static/images/avatar/2.jpg"}/>
                                        </Grid>
                                        <Typography
                                        display="flex"
                                        justifyContent="center"
                                        variant="subtitle1">
                                            {step.content.length >= 100
                                            ? `${content(step.content)}...`
                                            : step.content}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                    display="flex"
                                    justifyContent="center"
                                    paddingBottom="0.5rem">
                                        {`Realizado:${step.createdAt.slice(0, 10)}`}
                                    </Grid>
                                    <Grid display="flex" justifyContent="center">
                                        <Button
                                        onClick={() => navigate(`/Post/${step.post}`)}
                                        variant="contained"
                                        color={theme.palette.mode === "dark" ? "primary" : "secondary"}
                                        sx={{ height: "10%" }}>
                                            Ir
                                        </Button>
                                    </Grid>
                                </Grid>
                            ))}
                        </AutoPlaySwipeableViews>

                        <MobileStepper
                        sx={{ backgroundColor: "transparent" }}
                        steps={maxSteps1}
                        position="static"
                        activeStep={activeStep1}
                        nextButton={
                            <Button
                            size="small"
                            onClick={handleNext1}
                            disabled={activeStep1 === maxSteps1 - 1}>
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                            size="small"
                            onClick={handleBack1}
                            disabled={activeStep1 === 0}>
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                            </Button>
                        }/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography
                    variant="h4"
                    display="flex"
                    justifyContent="center"
                    padding="2rem" >
                    <TituloForo>Comentarios</TituloForo>
                </Typography>

                <Card sx={theme.palette.mode === "dark"
                ? { backgroundImage: "none" }
                : { background: "yellow" }}>
                    <AutoPlaySwipeableViews
                    index={activeStep2}
                    onChangeIndex={handleStepChange2}>
                        {reverseArr(userProfile.comments).slice(0, 6).map((step: any) => (
                            <Grid>
                                <Grid sx={{ height: 230, display: "grid", padding: "1rem" }}>
                                    <Grid
                                    sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    }}>
                                        <Avatar
                                        alt={userProfile.first_name}
                                        src={userProfile.profile_picture.length > 0
                                        ? userProfile.profile_picture
                                        : userProfile.avatar
                                        ? userProfile.avatar
                                        : "/static/images/avatar/2.jpg"}/>
                                    </Grid>
                                    <Typography
                                    display="flex"
                                    justifyContent="center"
                                    variant="subtitle1">
                                        {step.content.length >= 100
                                        ? `${content(step.content)}...`
                                        : step.content}
                                    </Typography>
                                </Grid>

                                <Grid
                                display="flex"
                                justifyContent="center" 
                                paddingBottom="0.5rem">
                                    {`Realizado:${step.createdAt.slice(0, 10)}`}
                                </Grid>
                                <Grid display="flex" justifyContent="center">
                                    <Button
                                    onClick={() => navigate(`/Post/${step.answer}`)}
                                    variant="contained"
                                    color={theme.palette.mode === "dark" ? "primary" : "secondary" }
                                    sx={{ height: "10%" }}>
                                        Ir
                                    </Button>
                                </Grid>
                            </Grid>
                        ))}
                    </AutoPlaySwipeableViews>

                    <MobileStepper
                    sx={{ backgroundColor: "transparent" }}
                    steps={maxSteps2}
                    position="static"
                    activeStep={activeStep2}
                    nextButton={
                        <Button
                        size="small"
                        onClick={handleNext2}
                        disabled={activeStep2 === maxSteps2 - 1}>
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                        size="small"
                        onClick={handleBack2}
                        disabled={activeStep2 === 0}>
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }/>
                </Card>
            </Grid>
        </Grid>
    </Paper>);
}
