import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
    fetch(`http://localhost:5000/watchCollection/${id}`)
      .then(res => res.json())
      .then(data => setWatch(data))
  }, [])

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/order', data)
      .then(res => {
        if (res) {
          alert('added successful')
          reset()
        }
      })
    history.push("/adminDashboard")
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
                  {...register("place", { required: true })}
                  placeholder="product"
                  defaultValue={watch.name}
                  className="p-2 m-2"
                  readOnly
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="btn btn-info w-50 m-2" />
              </form>

            </Grid>
          </Grid>
        </Box>
      </Container>



      {/* <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
      {/* <Row className="p-4">
          <Col xs={12} md={5}>
          <div classNameName="w-75  mx-auto">
          <Card.Title>{watch.name}</Card.Title>
            <Card.Img  className="img-thumbnail" variant="top" src={watch.img} /> */}

      {/* <Image src={destination.img} thumbnail /> */}

      {/* <Card.Body>
              
              <Card.Title>Cost:{watch.price}</Card.Title>
              <Card.Text>
              
              {watch.description}
              </Card.Text>
            </Card.Body>
            </div>
          </Col>
          <Col xs={12} md={7}>
            
              <div>
      <h1 className="mt-5 text-center text-info">
        Please Book for your Tickets
      </h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
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
                {...register("place", { required: true })}
                placeholder="place"
                className="p-2 m-2"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-info w-50 m-2" />
            </form>
            <p className="m-2 mb-2">
              already have account?{" "}
              <Link to="/login">
                <span className="text-danger">create account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
          </Col>
        </Row> */}
      {/* </Container>  */}
    </>
  );
};

export default PlaceOrder;