import React, {useContext} from 'react';
import './ButtonPlus.css';
import {useHistory} from "react-router-dom";

// straks ook nog naar nieuwe reflectie

function ButtonPlus({ projectId, pageName, children }) {
    const history = useHistory();

    function redirect() {
        if (pageName === "Dashboard") {
            history.push("/newproject")
        } else {
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