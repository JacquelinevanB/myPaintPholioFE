import React from 'react';
import logo from "../../assets/my-paintpholio-logo.png";
import Button from "../button/Button";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav-content">
            <div className="nav-content__logo">
                <img src={logo} alt="logo" width="200px"/>
            </div>
            <div className="nav-content__navigation">
                <ul>
                    <li><a href="#">dashboard</a></li>
                    <li><a href="#">nieuw project</a></li>
                    <li><a href="#">nieuwe update</a></li>
                </ul>
                <Button>inloggen</Button>
                <Button>registreren</Button>
                <Button>uitloggen</Button>
            </div>
        </nav>
    );
}

export default Navigation;