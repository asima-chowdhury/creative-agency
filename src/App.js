import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotMatch from './pages/NotMatch/NotMatch';
import Login from './pages/Login/Login';
import Order from './pages/Customer/Order/Order';
import ServiceList from './pages/Customer/ServiceList/ServiceList';
import Review from './pages/Customer/Review/Review';
import AdminServiceList from './pages/Admin/ServiceList/AdminServiceList';
import Dashboard from './pages/Dashboard/Dashboard';
import AddService from './pages/Admin/AddService/AddService';
import MakeAdmin from './pages/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/customerOrder">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/customerServiceList">
            <ServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/customerReview">
            <Review/>
          </PrivateRoute>

          <PrivateRoute path="/adminServiceList">
            <AdminServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
