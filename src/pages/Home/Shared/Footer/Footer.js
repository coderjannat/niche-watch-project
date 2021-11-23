import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LocalMallIcon from "@mui/icons-material/LocalMall";
const Footer = () => {
    return (
        <footer style={{ marginTop:20 }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.disabled"
        color="white"
      >
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
            
              <Box  sx={{
              display: "flex",alignItems: "center"}}>
              <h3 sx={{ fontSize: "2.4rem"}}>WatchU </h3>
              <LocalMallIcon sx={{ fontSize: "3.4rem", color:"#eea632"}} />
            </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Coder Jannatul Fardous @ &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
    );
};

export default Footer;