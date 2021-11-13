import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Container, Grid, Typography } from '@mui/material';

import Explore from '../Explore/Explore';
// import './Destination.css'

const ExploreCollection = () => {
    const [explores, setExplores] = useState([])


    // const colors = ['danger','primary','warning','success','info'];



    useEffect(() => {
        axios('https://still-river-71219.herokuapp.com/watchCollection')
            .then(res => setExplores(res.data))
    }, [])



    return (
        <Container>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 3,pt:4 }}>Our Collection</Typography>

            <Grid container spacing={2}>

                {
                    explores.map((explore, index) => <Explore
                        key={index}
                        explore={explore}
                    >
                    </Explore>)
                }

            </Grid>
        </Container>

    );
};

export default ExploreCollection;