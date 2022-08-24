import React from 'react';
import './Button.css';

function Button({ type, onClick, disabled, children }) {

    return (
        <button
            type={type}
            type="button"
            className="button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
