import React from 'react';
import { makeStyles } from '@mui/styles';
import './Banner.css';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: ` url('https://i.ibb.co/z7rcRZc/wrist-watch-3074570.jpg')`,
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
        <br />
        <br />

        <Button
          className="glow-on-hover"

        ><Link to="/explore"
          style={{ textDecoration: "none", color: "white" }}
        > EXPLORE MORE ! ! !</Link>
        </Button>

      </Box>

    </>
  );
};

export default Banner;