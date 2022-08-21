import React from 'react';
import './Button.css';

function Button({ clickHandler, disabled, children }) {

    return (
        <button
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
