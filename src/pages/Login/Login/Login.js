import { Container, Typography, TextField, Button, CircularProgress, Alert, InputAdornment  } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';




const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (

          <div  className="bg">
        <Navigation></Navigation>
      
        <Container>
           
                    <Typography  sx={{ mt: 5 }} variant="h2" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                      <TextField
                         InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <BsEnvelopeFill />
                              </InputAdornment>
                            )
                          }}
                           sx={{ width: '50%', m: 1, backgroundColor:'transparent'}}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            color="warning"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                         InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaKey />
                              </InputAdornment>
                            )
                          }}
                            sx={{ width: '50%', m: 1,mb:2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                            <br/>
                        <Button  style={{  backgroundColor:"#eea632",color:'white',boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'}} sx={{ width: '30%', m: 2 }} disableElevation type="submit" >Login</Button>
                        <br/>
                        <NavLink
                            style={{ textDecoration: 'none',color:'white' }}
                            to="/register">
                            <Button  sx={{color:'black'}} variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>Or</p>
            <p sx={{ mb: 5}}>Login With <Button style={{ backgroundColor:"transparent"}} alt="" sx={{ mb: 2}} onClick={handleGoogleSignIn} ><FcGoogle size={40}/> </Button> </p>
               
        </Container>
        </div>
    
    );
};


export default Login ;