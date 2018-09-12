import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';

function Header() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome  Poonam</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/first">First</Link>
            </li>
            <li>
                <Link to="/second">Second</Link>
            </li>
        </ul>
        </div>
    );
}

export default Header;