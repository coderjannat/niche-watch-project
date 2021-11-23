import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Typography, TextField, Button, Box, Grid } from '@mui/material';


const FindUs = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ mt: 5, pt: 5 }} variant="h2" component="div" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={2} item xs={12} sm={6} md={12}>
                <Grid item xs={6}>
                    <Box sx={{ mt: 5, pt: 5 }}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"

                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"

                            variant="standard" />

                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Massage"
                            type="text"
                            name="massege"
                            variant="standard" />

                        <Button style={{ backgroundColor: "#eea632", color: 'white', boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)' }} sx={{ width: '50%', m: 1 }} type="submit" variant="contained">SEND</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <GoogleMap></GoogleMap>
                </Grid>
            </Grid>
        </Box>
    )
}
export default FindUs;
