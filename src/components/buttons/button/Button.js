import React from 'react';
import './Button.css';

function Button({ type, clickHandler, disabled, children }) {

    return (
        <button
            type={type}
            type="button"
            className="button"
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
