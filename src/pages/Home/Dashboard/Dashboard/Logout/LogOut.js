import React from 'react';
import Button from '@mui/material/Button';
import useAuth from './../../../../Hooks/useAuth';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';


const LogOut = () => {
    const { user, logout } = useAuth();
  
    return (
        <div>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 3,pt:4 }}>We Miss You !!</Typography>
            <Link to= "/home" style={{ textDecoration: "none", color: "#616161" }}><Button onClick={logout} color="inherit">Logout</Button></Link>
        </div>
    );
};

export default LogOut;