import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Container, Grid, Typography } from '@mui/material';
import Watch from '../Watch/Watch';
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
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 3 }}>Our Popular Watch Collection</Typography>

            <Grid container spacing={2}>

                {
                    watches.map((watch, index) => <Watch
                        key={index}
                        watch={watch}
                    >
                    </Watch>)
                }

            </Grid>
        </Container>

    );
};

export default WatchCollection;