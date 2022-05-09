import { Container, Typography, Grid } from "@mui/material";
import { useState, useEffect } from 'react';
import { fetchAllTheorics } from '../../../app/Reducers/theoricSlice';
import { fetchGetAllPosts } from '../../../app/Reducers/getPostsForum';
// import { getAllExercises } from "../app/Reducers/exercisesSlice";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';


export default function Quantity(){
    const [theoric, setTheoric] = useState([]);
    const post = useAppSelector((state: any) => state.getAllPosts);
    // const exerc = useAppSelector((state) => state.exercises)
    const dispatch = useAppDispatch();

    fetchAllTheorics().then((res: any) => setTheoric(res));

    useEffect(() => {dispatch(fetchGetAllPosts(10))}, []);
    // useEffect(() => {dispatch(getAllExercises())});

    return(
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Typography
                        variant='h4'
                        component='div'
                        display='flex'
                        justifyContent='center'>
                            {`+${theoric ? theoric.length : null}`}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography
                        variant='h4'
                        component='div'
                        display='flex'
                        justifyContent='center'>
                            {/* {`+${theoric ? theoric.length : null}`} */}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography
                        variant='h4'
                        component='div'
                        display='flex'
                        justifyContent='center'>
                            {`+${post ? post.posts.length : null}`}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
};