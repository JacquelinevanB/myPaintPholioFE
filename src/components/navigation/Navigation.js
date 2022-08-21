import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from "../../assets/my-paintpholio-logo.png";
import Button from "../buttons/button/Button";
import './Navigation.css';

function Navigation({ pageName }) {
    return (
        <nav className="nav-content">
            <div className="nav-content__logo">
                <img src={logo} alt="logo" height="220px"/>
                <h3>{pageName}</h3>
            </div>
            {/* voor admin geldt alleen Uitloggen*/}
            {/* voor user dashboard geldt dashboard niet*/}
            <div className="nav-content__navigation" >
                {pageName ?
                <>
                    <ul>
                        <li>
                            <Link to="/user">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                Nieuw Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                Nieuwe Update
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                Uitloggen
                            </Link>
                        </li>
                    </ul>
                </>
                :
                <div>
                    <Button>inloggen</Button>
                    <Button>registreren</Button>
                </div>
                }


            </div>
        </nav>
    );
}

export default Navigation;