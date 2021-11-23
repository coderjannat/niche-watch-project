import React from 'react';
import { makeStyles } from '@mui/styles';
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: ` url('https://i.ibb.co/r693f7q/pexels-jatin-anand-125779.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    position: "relative",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },

  blogTitle: {
    fontWeight: 800,

  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>


        <br />
        <br />
       
        <Button
          className={styles.glowOnHover}

        ><Link to="/explore"
          style={{ textDecoration: "none", color: "white" }}
        > EXPLORE MORE ! ! !</Link>
        </Button>

      </Box>

    </>
  );
};

export default Banner;