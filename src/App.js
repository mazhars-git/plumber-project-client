import React, { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import Book from "./components/Dashboard/Book/Book";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import PrivateRoute from "./components/Login/PrivateRoute";
import Login from "../src/components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/dashboard/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/book/:id">
            <Book></Book>
          </Route>
          <Route path="/bookings">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider> 
  );
}

export default App;
