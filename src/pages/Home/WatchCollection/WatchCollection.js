import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Watch from '../Watch/Watch';
import Fade from 'react-reveal/Fade';
// import CircularProgress from '@mui/material/CircularProgress';
// import './Destination.css'

const WatchCollection = () => {
    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('https://still-river-71219.herokuapp.com/watchCollection')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0,6)
                setWatches(sliceData)
            }) 
    }, [])


    return (
        <Container>
            <Fade top>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 3,pt:4 }}>Our Popular Watch Collection</Typography></Fade>

            <Grid container spacing={2}>
                 {/* <CircularProgress  /> */}

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