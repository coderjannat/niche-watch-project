import React from 'react';
import Button from '@mui/material/Button';
import useAuth from './../../../../Hooks/useAuth';


const LogOut = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Button onClick={logout} color="inherit">Logout</Button>
        </div>
    );
};

export default LogOut;