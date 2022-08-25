import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Navigation.css';
import logo from "../../assets/my-paintpholio-logo.png";


function Navigation({ pageName }) {
    const history = useHistory();

    return (
        <nav className="nav-content">
            <div className="nav-content__logo">
                <img src={logo} alt="logo" height="220px"/>
                <h3>{pageName}</h3>
            </div>
            <div className="nav-content__navigation" >
                {pageName === "Admin pagina" &&
                <ul>
                    <li><NavLink to="/">Uitloggen</NavLink></li>
                </ul>}
                {pageName === "Dashboard" &&
                    <ul>
                        <li><NavLink to="/">Uitloggen</NavLink></li>
                        <li><NavLink to="/user">Nieuwe Update</NavLink></li>
                        <li><NavLink to="/user">Nieuw Project</NavLink></li>
                    </ul>}
                {pageName === "Projecten" &&
                    <ul>
                        <li><NavLink to="/">Uitloggen</NavLink></li>
                        <li><NavLink to="/user">Nieuwe Update</NavLink></li>
                        <li><NavLink to="/user">Nieuw Project</NavLink></li>
                        <li><NavLink to="/user">Dashboard</NavLink></li>
                    </ul>}
                {pageName === "Project pagina" &&
                    <ul>
                        <li><NavLink to="/">Uitloggen</NavLink></li>
                        <li><NavLink to="/user">Nieuwe Update</NavLink></li>
                        <li><NavLink to="/user">Nieuw Project</NavLink></li>
                        <li><NavLink to="/user">Dashboard</NavLink></li>
                    </ul>}
                {pageName === "" &&
                    <div>
                        <button
                            type="button"
                            className="button-nav"
                            onClick={() => history.push('/login')}>
                            inloggen
                        </button>
                        <button
                            type="button"
                            className="button-nav"
                            onClick={() => history.push('/register')}>
                            registreren
                        </button>
                    </div>}
            </div>
        </nav>
    );
}

export default Navigation;

// <button type="button" onClick={logout}>Log uit</button>