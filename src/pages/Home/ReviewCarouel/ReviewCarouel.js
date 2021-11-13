import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Grid, Typography, Box, Rating, Container } from '@mui/material';


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
    axios('https://still-river-71219.herokuapp.com/totalreview')
      .then(res => setReview(res.data))
  }, [])

  return (
    < div >
      <Container sx={{ mb: 3, pt: 6 }}>
        <Typography variant="h3" sx={{ color: 'text.primary' }} gutterBottom component="div">
          Review
        </Typography>
        <Carousel responsive={responsive}  >
          {review.map((order, index) => {
            return (

              <Box key={index}

                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 2,
                    p: 2,

                    width: 400,
                    height: 200,
                    overflow: "hidden "
                  },
                }}
              >
                <Paper elevation={3}
                  style={{ border: "none", backgroundColor: "#fdf0dd85", paddingTop: 50 }} >

                  <Typography variant="h6" gutterBottom component="div" style={{ pt: 4 }}>
                    {order.name}
                  </Typography>
                  <Typography variant="caption" gutterBottom component="div" readOnly>
                    {order.comment}
                  </Typography>
                  <Rating name="half-rating" defaultValue={order.nating} precision={0.5} readOnly />
                  {order.rating}
                </Paper>
              </Box>

            )
          }

          )}
        </Carousel>;
      </Container>
    </div>
  );
};

export default ReviewCarouel;











