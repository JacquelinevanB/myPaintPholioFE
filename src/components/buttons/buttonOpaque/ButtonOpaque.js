import React from 'react';
import './ButtonOpaque.css';

function ButtonOpaque({ clickHandler, disabled, children }) {

    return (
        <button
            type="button"
            className="button button-opaque"
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default ButtonOpaque;