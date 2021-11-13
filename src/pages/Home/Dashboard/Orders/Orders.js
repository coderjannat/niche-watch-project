import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Orders = ({ date }) => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [rest, setRest] = useState([]);
    // const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
    const { register, handleSubmit,reset } = useForm();
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


// STATUS UPDATE
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };
  

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res) {
                    alert('status update successfully')

                }
            })
        //   .then((res) => res.json())
        //   .then((result) => console.log(result));
    };


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
        <div className="body">
            <h2>Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select
                                            onClick={() => handleOrderId(row?._id)}
                                            {...register("status")}
                                        >
                                            <option value={row?.status}>{row?.status}Approved</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        
                                        <input type="submit" />
                                    </form>

                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" onClick={() => handleDelete(row._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;