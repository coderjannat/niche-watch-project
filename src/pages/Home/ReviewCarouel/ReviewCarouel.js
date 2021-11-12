import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Grid, Typography, Box, Rating } from '@mui/material';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const ReviewCarouel = () => {

  const [review, setReview] = useState([]);

  useEffect(() => {
    axios('http://localhost:5000/totalreview')
      .then(res => setReview(res.data))
  }, [])

  return (
    <>
      <Typography variant="h3" gutterBottom component="div">
        Review
      </Typography>
      <Carousel responsive={responsive}>
        {review.map((order, index) => {
          return (

            <Box key={index}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 10,
                  p:5,
                  pb:3,
                  width: 300,
                  height: 200,
                  overflow : "hidden "
                },
              }}
            >
              <Paper elevation={3} sx={{ py: 7 }}>

                <Typography variant="h6" gutterBottom component="div">
                  {order.name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {order.comment}
                </Typography>
                <Rating name="half-rating" defaultValue={order.nating} precision={0.5} />

              </Paper>
            </Box>

          )
        }

        )}
      </Carousel>;
    </>
  );
};

export default ReviewCarouel;











