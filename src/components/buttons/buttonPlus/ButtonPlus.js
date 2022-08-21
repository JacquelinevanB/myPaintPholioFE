import React from 'react';
import './ButtonPlus.css';

function ButtonPlus({ children, clickHandler }) {

    return (
        <button
            type="button"
            className="button-plus"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default ButtonPlus