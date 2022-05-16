import { Paper, Box, Typography, Grid, Avatar, Card, CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProfile } from "../../app/Reducers/userProfileSlice";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { TituloForo } from '../Style/StyledComponents';
import { fetchUserByEmail, remoteUpdateUser } from "../../app/Reducers/userSlice";
import { userTemplate } from "../../app/Utils/userUtilities";
import Dialog from "../Dialog/Dialog";
import henryLogo from "./bannerDefault/henryLogo.jpg";
import henryCoin from "./bannerDefault/henryCoin.jpeg";


export default function HenryCoins() {
    const { id }: any = useParams();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const userProfile = useAppSelector((state) => state.profile.profile);
    const user = useAppSelector((state) => state.user.data);
    let [userOwn, setUserOwn] = useState(userTemplate);
    let [userGive, setUserGive] = useState(userTemplate);
    let [disabledButton, setDisabledButton] = useState(false);

    const [openDialog, setOpenDialog] = useState(false);
    const [modalState, setModalState] = useState("Enviando...");

    useEffect(() => {
        dispatch(fetchProfile(id));
        setUserOwn(userOwn = user);
        setUserGive(userGive = userProfile);
        if(user.userCoin.includes(userProfile.user_name)){
            setDisabledButton(disabledButton = true);
        };
    }, [dispatch, id, user]);


    const handleOnClick = () => {
        setUserOwn(userOwn = {
            ...userOwn,
            own_henry_coin: user.own_henry_coin - 1,
            userCoin: [...user.userCoin, userProfile.user_name]
        });
    
        setUserGive(userGive = {
            ...userGive,
            give_henry_coin: userProfile.give_henry_coin + 1
        });
            
        setModalState("Enviando");
        setOpenDialog(true);
        dispatch(remoteUpdateUser(userOwn))
        .then((res) => console.log(res))

        dispatch(fetchUserByEmail(user.email));
            
        dispatch(remoteUpdateUser(userGive))
        .then((res) => console.log(res))
        .then(() => setModalState(`Le has dado una Henry Coin a ${userProfile.user_name}🚀`));
    };


    if(user._id !== userProfile._id && userProfile.role === 2 && user.role === 2) {
        return(
            <Grid container spacing={5} padding='.7rem' display='flex' justifyContent='center'>
                <Grid item xs={12} sm={9}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none', padding:'1rem'} : { background:'yellow', padding:'1rem'}}>
                        <Grid sx={{display:'flex', justifyContent:'flex-start'}}>
                            <Box
                            display="flex"
                            justifyContent="space-around"
                            alignItems="center"
                            justifySelf="flex-start"
                            sx={{ width: "100px" }}
                            mt={1}
                            >
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
                            justifyContent='center'
                            sx={theme.palette.mode === 'dark' ? { color:'yellow', marginTop:'-3.5rem'} : { color:'black', marginTop:'-3.5rem'}}>
                                {`Henry Coins obtenidas: ${userProfile.give_henry_coin}`}
                            </Typography>
                        <Grid sx={{display:'flex', justifyContent:'flex-end'}}>
                            <Button
                            onClick={handleOnClick}
                            disabled={user.own_henry_coin > 0 ? disabledButton : true}
                            variant="contained"
                            sx={{height:'20%'}}
                            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}>
                                <Typography>
                                    Dar una Henry Coin
                                </Typography>
                                <Dialog
                                openDialog={openDialog}
                                setOpenDialog={setOpenDialog}
                                textSuccess="Cambios guardados correctamente"
                                error="Error al hacer los cambios"
                                modalState={modalState}
                                setModalState={setModalState}/>
                            </Button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        )
    } 
    else if(id === user._id && user.role === 2){
        return(
            <Grid container spacing={5} padding='.7rem' display='flex' justifyContent='center'>
                <Grid item xs={12} sm={9}>
                    <Card sx={theme.palette.mode === 'dark' ? { backgroundImage:'none' } : { background:'yellow' }}>
                        <Grid sx={{display:'flex', justifyContent:'flex-start', marginBottom:'2rem'}}>
                            <Box
                            display="flex"
                            justifyContent="space-around"
                            alignItems="center"
                            justifySelf="flex-start"
                            sx={{ width: "100px", padding:'.5rem', marginBottom:'1rem', marginLeft:'1.5rem' }}
                            mt={1}
                            >
                                <Avatar
                                src={henryCoin}
                                sx={{width:'5rem', height:'5rem', border: '2px solid', borderColor: 'yellow'}}>
                                </Avatar>
                            </Box>
                        </Grid>
                        <Grid sx={{ marginTop:'-4rem', padding:'.7rem'}}>
                            <Grid>
                                <Typography
                                variant="h5" 
                                component="div" 
                                display='flex'
                                justifyContent='center'
                                sx={theme.palette.mode === 'dark' ? { color:'yellow', marginTop:'-5rem', marginBottom:'.7rem'} : { color:'black', marginTop:'-5rem', marginBottom:'.7rem'}}>
                                    {`Henry Coins disponibles: ${user.own_henry_coin}`}
                                </Typography>
                            </Grid>
                            <Typography
                            variant="h5" 
                            component="div" 
                            display='flex'
                            justifyContent='center'
                            sx={theme.palette.mode === 'dark' ? { color:'yellow' } : { color:'black' }}>
                                {`Henry Coins obtenidas: ${user.give_henry_coin}`}
                            </Typography>
                        </Grid>
                    </Card>
                </Grid> 
            </Grid>
        );
    }
    else {
        return null;
    };
};