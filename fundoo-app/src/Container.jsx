import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Pages/login';
import Register from './components/Pages/register';
import ForgotPassword from './components/Pages/forgotPassword';
import Navbar from './components/Pages/navbar';
import SideBar from './components/Pages/sidebar';

function Container() {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/forgotPassword" component={ForgotPassword}></Route>
            {/* <Route path="/home" component={Home}></Route> */}
            <Route path="/navbar" component={Navbar}></Route>
            <Route path="/sidebar" component={SideBar}></Route>
        </Switch>
    );
}

export default Container;