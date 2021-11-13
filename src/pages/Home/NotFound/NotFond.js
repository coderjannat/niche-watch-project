import React from 'react';

import { Link} from 'react-router-dom';
import img from '../../../img/404.png';

import './NotFound.css';
import { Container, Button, Typography } from '@mui/material';

const NotFound = () => {
    return (
 <Container>
       
        <div className="text-center">
        <Link to="/"> <Button variant="outline-success mt-5 ps-5 pe-5" size="lg">Go Back</Button>{' '}</Link>
        </div>
        <div className="ps-2">
        <img style={{ width: '90%' }} src={img} alt="" />
        </div>
         </Container>
   );

};

export default NotFound;