import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Container, Grid, Typography} from '@mui/material';
import Watch from '../Watch/Watch';
// import './Destination.css'

const WatchCollection = () => {
    const [watches, setWatches] = useState([])
 

    // const colors = ['danger','primary','warning','success','info'];



    useEffect(() => {
        axios('http://localhost:5000/watchCollection')
            .then(res => setWatches(res.data))
    }, [])


   
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Watch</Typography>
    
            <Grid container spacing={2}>
            
            {
                    watches.map((watch,index )=> <Watch
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