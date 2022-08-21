import React from 'react';
import './ButtonClear.css';

function ButtonClear({ children, clickHandler }) {

    return (
        <button
            type="button"
            className="button button-clear"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default ButtonClear
