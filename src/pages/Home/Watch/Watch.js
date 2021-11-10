import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';

const Watch = ({watch}) => {
    const {name, description} = watch
    const history = useHistory()

    const handleAdded =(id)=>{
        history.push(`order/${id}`)
    }
    return (
        <>
          <Grid item xs={12} sm={6} md={4} onClick={()=>handleAdded(watch._id)}>
                <Paper elevation={3} sx={{ py: 5 }}>
                   
                    <Typography variant="h6" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {description} SPACES AVAILABLE
                    </Typography>
                    <Button variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>   
        </>
    );
};

export default Watch;