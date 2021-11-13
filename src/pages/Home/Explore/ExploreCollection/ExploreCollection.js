import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from './../../Shared/Navigation/Navigation'
import { Container, Grid, Typography } from '@mui/material';

import Explore from '../Explore/Explore';
// import './Destination.css'

const ExploreCollection = () => {
    const [explores, setExplores] = useState([])


    useEffect(() => {
        axios('https://still-river-71219.herokuapp.com/watchCollection')
            .then(res => setExplores(res.data))
    }, [])



    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography variant="h3" sx={{ color: 'text.primary', mb: 3, pt: 4 }}>Our Collection</Typography>

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
        </>

    );
};

export default ExploreCollection;