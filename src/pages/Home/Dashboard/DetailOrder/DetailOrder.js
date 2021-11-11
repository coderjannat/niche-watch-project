import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const DetailOrder = ({ date }) => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [rest, setRest] = useState([]);
    const [smShow, setSmShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const url = `https://still-river-71219.herokuapp.com/order?email=${user.email}`

        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [date, user.email, token])




    const handleDelete = (id) => {
        const checker = window.confirm('Are you sure to delete?')
        if (checker) {
            console.log(id);
            axios.delete(`http://localhost:5000/order?email=${user.email}`)
                .then(backend => {
                    if (backend.data) {

                        setSmShow(true)
                        alert('deleted')
                        const restpart = rest.filter(item => item._id !== id);
                        setRest(restpart)
                    }



                })
        }
        history.push("/home")
    }


    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>

            <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Watch</Typography>

            <Grid container spacing={2}>

                {
                     orders.map(( order,index) => {
                         return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            key={index}
                        <Paper elevation={3} sx={{ py: 5 }}>
                           
                            <Typography variant="h6" gutterBottom component="div">
                                {order.price}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {order.product}
                            </Typography>
                            {/* <Typography variant="caption" display="block" gutterBottom>
                                {description} SPACES AVAILABLE
                            </Typography> */}
                            <Button variant="contained" onClick={() => handleDelete(order._id)}>Delete</Button>
                        </Paper>
                    </Grid>)
                     }
                    
                    // <Watch
                    //     key={index}
                    //     watch={watch}
                    // >
                    // </Watch>
                    
                    )}
               

            </Grid>
        </Container>

            {/* <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>

                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.displayName}
                                </TableCell>
                                <TableCell align="right">{row.product}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">
                                    

                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" onClick={() => handleDelete(row._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    );
};

export default DetailOrder;