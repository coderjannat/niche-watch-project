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
import Dashboard from './pages/Home/Dashboard/Dashboard/Dashboard';
import Orders from './pages/Home/Dashboard/Orders/Orders';
import ExploreCollection from './pages/Home/Explore/ExploreCollection/ExploreCollection';
import DetailOrder from './pages/Home/Dashboard/DetailOrder/DetailOrder';
import Faq from './pages/Home/Faq/Faq';
import PrivateRoute from './pages/privateRoute/PrivateRoute'
import Footer from './pages/Home/Shared/Footer/Footer';
import NotFound from './pages/Home/NotFound/NotFond';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        
        <Router>
          <Switch>
          
           <Route path="/dashboard">
              <Dashboard />
            </Route> 
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <ExploreCollection />
            </Route>
            <PrivateRoute path="/detailorder">
              <DetailOrder />
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <PlaceOrder />
            </PrivateRoute >
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;