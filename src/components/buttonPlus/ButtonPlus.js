import React, {useContext} from 'react';
import './ButtonPlus.css';
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

// straks ook nog naar nieuwe reflectie

function ButtonPlus({ projectId, pageName, children }) {
    const { user: { username } } = useContext(AuthContext);
    const history = useHistory();

    function redirect() {
        {pageName === "Dashboard" ?
            history.push(`/newproject/${username}`)
            :
            history.push(`/newreflection/${projectId}`)
        }
    }

    return (
        <button
            type="button"
            className="button-plus"
            onClick={redirect}
        >
            {children}
        </button>
    );
}

export default ButtonPlus