import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"

import "./ReviewCarouel.css";

import "swiper/css/bundle";


// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Pagination]);
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';




const ReviewCarouel = () => {
 
const [review,setReview] = useState([]);

  useEffect(() => {
    axios('http://localhost:5000/totalreview')
        .then(res => setReview(res.data))
}, [])

    return (
        <>
          <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>   
        </>
    );
};

export default ReviewCarouel;





// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import { Grid } from '@mui/material';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.js'
// import 'swiper/swiper-bundle.min.js'



// const ReviewCarouel = () => {
 
// const [reviw,setReview] = useState([]);

//   useEffect(() => {
//     axios('http://localhost:5000/totalreview')
//         .then(res => setReview(res.data))
// }, [])

//     return (
//         <>
//              <Swiper
//       spaceBetween={20}
//       slidesPerView={4}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       centeredSlides
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={swiper => console.log(swiper)}
//     >
//       {reviw.map(( order,index) => {
//                          return (
//                           <SwiperSlide key={index}> 
//                         <Grid item xs={12} sm={6} md={4} >
                          
//                         <Paper elevation={3} sx={{ py: 5 }}>
                           
//                             <Typography variant="h6" gutterBottom component="div">
//                                 {order.email}
//                             </Typography>
//                             <Typography variant="h6" gutterBottom component="div">
//                                 {order.comments}
//                             </Typography>
                           
                            
//                         </Paper>
//                     </Grid>
//                     </SwiperSlide>)
//                       }
//                     )}
      
//     </Swiper>
//         </>
//     );
// };

// export default ReviewCarouel;



