import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';

import AuthProvider from './pages/context/AuthProvider';
import Register from './pages/Login/Register/Register';
import Home from './pages/Home/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder/PlaceOrder';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {/* <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute> */}
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/order/:id">
              <PlaceOrder />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;