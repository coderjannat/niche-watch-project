import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




const PlaceOrder = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState({})
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://still-river-71219.herokuapp.com/watchCollection/${id}`)
      .then(res => res.json())
      .then(data => setWatch(data))
  }, [])

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    axios.post('https://still-river-71219.herokuapp.com/order', data)
      .then(res => {
        if (res) {
          alert('added successful')
          reset()
        }
      })
    history.push("/dashboard")
  };
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={watch.img}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {watch.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {watch.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  defaultValue={user.displayName}
                  placeholder="Name"
                  className="p-2 m-2"
                  readOnly
                />
                <br />

                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  defaultValue={user.email}
                  className="p-2 m-2"
                  readOnly
                />
                <br />

                <input className="m-2 p-2  fs-6" type="date" {...register("date")} />
                <br />
                <input type="number"
                  {...register("price", { required: true })}
                  placeholder="price"
                  className="p-2 m-2"
                />
                <br />
                <input
                  {...register("product", { required: true })}
                  placeholder="product"
                  defaultValue={watch.name}
                  className="p-2 m-2"
                  readOnly
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="address"
                  defaultValue = "Address"
                  className="p-2 m-2"
                  
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="btn btn-info w-50 m-2" />
              </form>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default PlaceOrder;