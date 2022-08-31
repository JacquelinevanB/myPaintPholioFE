import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import logo from "../../assets/my-paintpholio-logo.png";
import './Navigation.css';

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
