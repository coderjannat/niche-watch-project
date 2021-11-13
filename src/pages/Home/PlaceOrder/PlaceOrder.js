import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import './PlaceOrder.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
});



const PlaceOrder = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  })
  const { id } = useParams();
  const [watch, setWatch] = useState({})
  const { user } = useAuth();
  const history = useHistory();
  const [orderId, setOrderId] = useState("");

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
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 3,pt:4 }}>Place Order</Typography>
          <Grid container spacing={2} item xs={12} sm={6} md={12}>
            <Grid item xs={6}>
               <Paper elevation={3} sx={{ py: 5 }}
                className={classes.root}
                classes={{ root: state.raised ? classes.cardHovered : "" }}
                onMouseOver={() => setState({ raised: true, shadow: 3 })}
                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                raised={state.raised} zdepth={state.shadow}
                style={{ border: "none", backgroundColor: "transparent", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  image={watch.img}
                  alt="watch"
                />
                <Typography variant="h7" gutterBottom component="div">
                  {watch.description}
                </Typography>
                <Typography variant="h6" display="block" gutterBottom>
                  ${watch.price}
                </Typography>

              </Paper>
            </Grid>

            <Grid item xs={6}>
            {/* <Box sx={{ pt: 5, mt:5 }}> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                

                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  defaultValue={user.email}
                  className="p-2 m-2 inputStyle"
                  readOnly
                />
                <br />

                <input className="m-2 p-2  fs-6  inputStyle" type="date" {...register("date")} />
                <br />
                <input type="number"
                  {...register("price", { required: true })}
                  placeholder="price"
                  className="p-2 m-2 inputStyle"
                  required
                />
              
                <br />
                 <input
                  {...register("address", { required: true })}
                  placeholder="address"
                
                  className="p-2 m-2 inputStyle"
                  required

                />
                <br />
                <input 
                  {...register("img", { required: true })}
                  placeholder="product"
                  defaultValue={watch.img}
                  className="p-2 m-2 inputStyle"
                  readOnly
                />
                <br />
                <input 
                  {...register("product", { required: true })}
                  
                  defaultValue={watch.name}
                  className="p-2 m-2 inputStyle"
                  readOnly
                />
                
               
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="btn btn-info w-50 m-2 inputStyle" />

               
              </form>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default PlaceOrder;