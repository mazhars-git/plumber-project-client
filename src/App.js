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
import Login from "./components/Home/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";

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
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
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
