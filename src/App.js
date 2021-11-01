import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import ConfirmOrder from './pages/ConfirmBooking/ConfirmBooking';
import AddNewService from './pages/AddNewService/AddNewService';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './pages/MyOrders/MyOrders';
import UpdateInformation from './pages/UpdateInformation/UpdateInformation';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/services/confirmOrder/:id">
              <ConfirmOrder></ConfirmOrder>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/myOrder/updateInformation/:id">
              <UpdateInformation></UpdateInformation>
            </PrivateRoute>

            <PrivateRoute path="/addNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>

            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
