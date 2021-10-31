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
            <Route exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/services/confrimOrder/:id">
              <ConfirmOrder></ConfirmOrder>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/myOrder/updateInformation/:id">
              <UpdateInformation></UpdateInformation>
            </Route>
            <Route path="/addNewService">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
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
