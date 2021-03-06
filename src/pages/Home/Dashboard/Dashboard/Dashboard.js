import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import { Button } from '@mui/material';
import useAuth from './../../../Hooks/useAuth';
import AdminRoute from './../../../Login/AdminRoute/AdminRoute';
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import DetailOrder from '../DetailOrder/DetailOrder';
import LogOut from './Logout/LogOut';
import AddWatch from '../AddWatch/AddWatch';
import Allorder from '../AllOrder/Allorder';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar />
            <Divider />
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <Link to={`${url}/orders`}>
                <li className="dashboard-menu mt-5">Manage Order</li>
            </Link>

            <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
            </Link>
            <Link to={`${url}/detailorder`}>
                <li className="dashboard-menu mt-5">My Order</li>
            </Link>
            <Link to={`${url}/logOut`}>
                <li className="dashboard-menu mt-5">LogOut</li>
            </Link>


            {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addwatch`}><Button color="inherit">Add Watch</Button></Link>
                <Link to={`${url}/allorder`}><Button color="inherit">All Order</Button></Link>
            </Box>}
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >

                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard /
                        </Typography>
                        <Link to="/home"
                            style={{ textDecoration: "none", color: "#f2f0f0" }}
                        > <Typography variant="h6" noWrap component="div">
                                Home
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                > 
                    <Toolbar />

                    <Switch>
                        <Route exact path={`${path}/orders`}>
                            <Orders />
                        </Route>
                        <Route exact path={`${path}/logOut`}>
                            <LogOut />
                        </Route>
                        <Route exact path={`${path}/detailorder`}>
                            <DetailOrder />
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review />
                        </Route>

                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/addwatch`}>
                            <AddWatch />
                        </AdminRoute>
                        <AdminRoute path={`${path}/allorder`}>
                            <Allorder />
                        </AdminRoute>
                    </Switch>

                </Box>
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
