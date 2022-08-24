import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

// redirect naar home of naar login?

function PrivateRoute({children, path}) {

    const {isAuth} = useContext(AuthContext);

    return (

        <Route exact path={path}>

            {isAuth ? children

                :

                <Redirect to={{pathname: '/'}}/>
            }

        </Route>
    );
}

export default PrivateRoute;