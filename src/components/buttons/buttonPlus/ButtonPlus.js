import React from 'react';
import './ButtonPlus.css';
import {useHistory} from "react-router-dom";

// straks ook nog naar nieuwe reflectie

function ButtonPlus({ onClick, children }) {
    const history = useHistory();

    function redirect() {
        history.push(`/project/new`)
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