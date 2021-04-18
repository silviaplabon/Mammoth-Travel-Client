import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import AddService from './components/Admin/AddService/AddService'
import AddTestimonial from './components/User/AddTestimonial/AddTestimonial'
import Login from './components/Login/Login/Login'
import ManageService from './components/Admin/ManageService/ManageService';
import OrderList from './components/Admin/OrderList/OrderList';
import AdminMaker from './components/Admin/AdminMaker/AdminMaker';
import Book from './components/User/Book/Book';
import BookingList from './components/User/BookingList/BookingList';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext(); 
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch> 
           <Route exact path="/">
            <Home></Home>
           </Route>
           {/* admin Route */}
          <PrivateRoute  exact path="/addService">
            <AddService></AddService>
          </PrivateRoute >
        
          <PrivateRoute  exact path="/adminMaker">
            <AdminMaker></AdminMaker>
          </PrivateRoute>
          <PrivateRoute  exact path="/orderList">
          <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute  exact path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute >
          {/* user Route */}
          <PrivateRoute  exact path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </PrivateRoute >
          <PrivateRoute  exact path="/service/:id">
                <Book></Book>
          </PrivateRoute >

          <PrivateRoute  exact path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute >
          
          <Route exact  path="/login">
            <Login></Login>
          </Route>
          
          {/* <PrivateRoute  exact path="/admin">
            <Admin></Admin>
          </PrivateRoute >
          <PrivateRoute  exact path="/orders">
            <OrdersCollection></OrdersCollection>
          </PrivateRoute >
          <PrivateRoute exact path="/order/:id">
            <Order></Order>
          </PrivateRoute>
        
          <Route exact  path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute  exact path="/addProducts">
            <AddProducts></AddProducts>
          </PrivateRoute >
          <PrivateRoute  exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </PrivateRoute >
          <Route  exact path="*">
            <NotFound></NotFound>
          </Route > */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
