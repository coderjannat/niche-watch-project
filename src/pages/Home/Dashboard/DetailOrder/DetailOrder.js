import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Button, CardMedia } from '@mui/material';
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


                <Grid container spacing={2}>

                    {
                        orders.map((order, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>

                                    <Paper elevation={3} sx={{ py: 5 }} style={{ border: "none", backgroundColor: "transparent", }}>
                                        <CardMedia
                                            component="img"
                                            image={order.img}
                                            alt="watch"
                                        />
                                        <Typography variant="h6" gutterBottom component="div">
                                            ${order.price}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom component="div">
                                            {order.product}
                                        </Typography>

                                        <Button sx={{ m: 2 }} variant="outlined" onClick={() => handleDelete(order._id)}>Delete</Button>
                                        <Button variant="outlined">{order.status}</Button>
                                    </Paper>
                                </Grid>)
                        }


                        )}


                </Grid>
            </Container>


        </div>
    );
};

export default DetailOrder;