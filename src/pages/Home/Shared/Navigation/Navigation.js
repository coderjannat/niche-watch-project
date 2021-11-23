import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import LocalMallIcon from "@mui/icons-material/LocalMall";
import useAuth from './../../../Hooks/useAuth';


const useStyles = makeStyles({
  root: {
    background: '#e1e4e9df',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 1,
    bottom: 20,
    zIndex: 5,
  }
});




const Navigation = () => {
  const classes = useStyles();
  const { user, logout } = useAuth();

  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);


  return (
    <>
      <Box elevation={0}
        className={classes.root} >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 5px ",
            }}
            component="div"
          >
            {/* logo */}
            <Box>
              <IconButton>WatchU
                <LocalMallIcon sx={{ fontSize: "2.4rem", color:"#eea632"}} />
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
                  style={{ textDecoration: "none", color: "#616161" }}
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
              ><Link to="/explore"
                style={{ textDecoration: "none", color: "#616161" }}
              >
                  Products
                </Link>
              </Typography>


              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              ><Link to="/detailorder"
                style={{ textDecoration: "none", color: "#616161" }}
              >
                  My Order
                </Link>
              </Typography>

              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
              ><Link to="/faq"
                style={{ textDecoration: "none", color: "#616161" }}
              >
                  FAQ
                </Link>
              </Typography>
            </Box>


            {/* button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>



              {
                user?.email ?
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px 0px ",
                    }}
                    component="div">

                    <Button
                      sx={{ background: "#eea632", marginLeft: "10px" }}
                      disableElevation

                    ><Link to="/dashboard"
                      style={{ textDecoration: "none", color: "#616161", background: "#eea632" }}
                    > Dashboard</Link>
                    </Button>
                    <Button
                      onClick={logout}
                      sx={{ background: "#eea632", marginLeft: "10px",color: "#616161" }}
                      disableElevation>Logout
                    </Button>
                    </Box>:<Button
                    sx={{ background: "#eea632", marginLeft: "10px",color: "#616161" }}
                    disableElevation

                  ><Link to="/login"
                    style={{ textDecoration: "none", color: "#616161", background: "#eea632" }}
                  >
                      Login
                    </Link>
                  </Button>

              }

            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navigation;