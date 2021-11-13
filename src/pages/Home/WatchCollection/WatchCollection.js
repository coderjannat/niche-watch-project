import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Watch from '../Watch/Watch';
import Fade from 'react-reveal/Fade';
import CircularProgress from '@mui/material/CircularProgress';
// import './Destination.css'

const WatchCollection = () => {
    const [watches, setWatches] = useState([])


    // const colors = ['danger','primary','warning','success','info'];



    useEffect(() => {
        axios('https://still-river-71219.herokuapp.com/watchCollection')
            .then(res => setWatches(res.data))
    }, [])



    return (
        <Container>
            <Fade top>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 3,pt:4 }}>Our Popular Watch Collection</Typography></Fade>

            <Grid container spacing={2}>

                {
                    watches.map((watch, index) => <Watch
                        key={index}
                        watch={watch}
                    >
                    </Watch>)
                    
                }
                         <CircularProgress  />
            </Grid>
        </Container>

    );
};

export default WatchCollection;