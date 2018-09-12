import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import First from "./First";
import Second from "./Second";

function Container() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />    
        </Switch>
    );
}

export default Container;