import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from 'react-router-dom';
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import useAuth from './../../../Hooks/useAuth';
import MenuIcon from "@mui/icons-material/Menu";



const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const [openDrawer, setOpenDrawer] = useState(true); //
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);

  const openMenu = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 0px ",
            }}
            component="div"
          >
            {/* logo */}
            <Box>
              <IconButton>
                <LocalMallIcon sx={{ fontSize: "2.4rem" }} />
              </IconButton>
            </Box>

            {/* Links */}
            
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161"
                  }}
                >
                    <Link to="/"
                    style={{textDecoration:"none",color: "#616161"}}
                    >
                  Home
                  </Link>
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Brand
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  Categories
                </Typography>
                {/* Dropdown Items */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                   <Link to="/appointment"><MenuItem>appoin</MenuItem></Link>
                  <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
                  <MenuItem onClick={handleClose}>Women</MenuItem>
                  <MenuItem onClick={handleClose}>Phones</MenuItem>
                  <MenuItem onClick={handleClose}>Accessories</MenuItem>
                  <MenuItem onClick={handleClose}>Others</MenuItem>
                </Menu>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Men
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Women
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  FAQ
                </Typography>
              </Box>
            

            {/* button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ background: "#ff4081", marginLeft: "10px" }}
                disableElevation
                variant="contained"
              >
                Account
              </Button>

              {matches ? (
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingBasketIcon color="action" />
                  </Badge>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navigation;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from './../../../Hooks/useAuth';

// const Navigation = () => {
//     const { user, logout } = useAuth();
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     {/* <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton> */}
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                        WatchU
//                     </Typography>
//                     <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
//                     {
//                         user?.email ?
//                             <Box>
//                                 <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
//                                     <Button color="inherit">Dashboard</Button>
//                                 </NavLink>
//                                 <Button onClick={logout} color="inherit">Logout</Button>
//                             </Box>
//                             :
//                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
//                                 <Button color="inherit">Login</Button>
//                             </NavLink>
//                     }
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };

// export default Navigation;