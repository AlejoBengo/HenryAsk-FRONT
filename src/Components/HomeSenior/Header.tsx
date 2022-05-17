import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../app/Utils/allUsers";
import { useTheme } from '@mui/material';
import { fetchGetAllPosts } from '../../app/Reducers/getPostsForum';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function DenseAppBar() {
    const post = useAppSelector((state: any) => state.getAllPosts);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const users = useAppSelector((state: any) => state.allUser);
    const userRole = useAppSelector((state) => state.user.data);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        dispatch(fetchGetAllPosts(10));
    }, []);

    useEffect(() => {
        dispatch(fetchAllUsers);
    }, [userRole]);

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    
    return(
        userRole.role >= 1 ? 
            (<Box sx={{ height: '2rem' }}>
                <AppBar position="static">
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    <Toolbar 
                    variant="dense"
                    sx={{ 
                        backgroundColor:'yellow', 
                        color:'black',
                        display:'flex', 
                        justifyContent:'center', 
                        minHeight: '2rem'}}>
                            <Typography>
                                {`Ya somos +${users ? users.allUsers.length : null} usuarios en la comunidad🖤`}
                            </Typography>
                    </Toolbar>
                    <Toolbar 
                    variant="dense"
                    sx={{ 
                        backgroundColor:'yellow', 
                        color:'black',
                        display:'flex', 
                        justifyContent:'center', 
                        minHeight: '2rem'}}>
                            <Typography>
                                {`Se han creado +${post ? post.posts.length : 0} posts🚀`}
                            </Typography>
                    </Toolbar>
                </AutoPlaySwipeableViews>
                </AppBar>
            </Box>)
        : (
            <Box sx={{ height: '2rem' }}>
                <AppBar position="static">
                    <Toolbar 
                    variant="dense"
                    sx={{ 
                    backgroundColor:'yellow', 
                    color:'black',
                    display:'flex', 
                    justifyContent:'center', 
                    minHeight: '2rem'}}>
                        <Typography>
                            {`Bienvenidxs al foro de Henry🖤`}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    );
};
