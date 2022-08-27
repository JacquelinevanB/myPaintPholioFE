import React, {useContext, useState} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import './Navigation.css';
import logo from "../../assets/my-paintpholio-logo.png";
import {AuthContext} from "../../context/AuthContext";

//1. Als je niet ingelogd bent, dan zie je knoppen inloggen en registreren
//2. Als je ingelogd bent als admin, dan zie je de knop uitloggen
//3. Als je ingelogd bent als user, dan zie je de knoppen dashboard en uitloggen
//4. Als je ingelogd bent als user en je dashboard bezoekt, wordt dashboard verborgen

function Navigation({ pageName }) {
    const { user, isAuth, logout } = useContext(AuthContext);
    const history = useHistory();


    return (
        <nav>
            <Link to='/'>
                <span className="nav-content__logo">
                    <img src={logo} alt="logo"/>
                    <h3>{pageName}</h3>
                </span>
            </Link>

            <div className="nav-content__navigation">

                {isAuth ?
                    <>
                        <button
                            hidden={pageName === "Admin pagina" || user.role === "ROLE_USER"}
                            type="button"
                            onClick={() => history.push('/admindashboard')}
                        >
                            admin
                        </button>
                        <button
                            hidden={pageName !== "Reflectie pagina"}
                            type="button"
                            onClick={() => history.goBack()}
                        >
                            terug
                        </button>
                        <button
                            hidden={pageName === "Dashboard" || user.role === "ROLE_ADMIN"}
                            type="button"
                            onClick={() => history.push('/userdashboard')}
                        >
                            dashboard
                        </button>
                        <button
                            type="button"
                            onClick={logout}
                        >
                            uitloggen
                        </button>
                    </>
                    :
                    <>
                        <button
                            hidden={pageName === "Inloggen" || pageName === "Registreren"}
                            type="button"
                            onClick={() => history.push('/login')}
                        >
                            inloggen
                        </button>
                        <button
                            hidden={pageName === "Inloggen" || pageName === "Registreren"}
                            type="button"
                            onClick={() => history.push('/register')}
                        >
                            registreren
                        </button>
                    </>
                }
            </div>

        </nav>
    );
}

export default Navigation;
