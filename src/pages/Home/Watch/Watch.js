import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from  './Watch.module.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 310,
      transition: "transform 0.15s ease-in-out"
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  });

const Watch = ({ watch }) => {
    const classes = useStyles();
    const [state, setState] = useState({
      raised:false,
      shadow:1,
    })
  
    const { name, title, img } = watch
    const history = useHistory()

    const handleAdded = (id) => {
        history.push(`order/${id}`)
    }
    return (
        <>
            <Grid item xs={12} sm={6} md={4} onClick={() => handleAdded(watch._id)}>
                <Paper elevation={3} sx={{ py: 5 }} 
                className={classes.root} 
                classes={{root: state.raised ? classes.cardHovered : ""}}
                onMouseOver={()=>setState({ raised: true, shadow:3})} 
                onMouseOut={()=>setState({ raised:false, shadow:1 })} 
                raised={state.raised} zdepth={state.shadow}
                style={{ border: "none", backgroundColor: "transparent",  boxShadow:"none"}}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt="watch"
                    />
                    <Typography variant="h6" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {title} 
                    </Typography>
                    <Button style={{ color: 'black'}} className={styles.button}>Buy Now</Button>
                </Paper>
            </Grid>
        </>
    );
};

export default Watch;