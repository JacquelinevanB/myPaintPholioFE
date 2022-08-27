import React from 'react';
import './PaintingCardVar1.css';

function PaintingCardVar1({ img, imgDescription, date, text, onClick }) {

    return (
        <article className="painting-card__var1">
            <span>
                 <img src={img}
                      alt={imgDescription}
                      onClick={onClick}
                 />
            </span>
            <span className="painting-card__var1-textwrapper">
                <h3>{date}</h3>
                <p>{text}</p>
            </span>
        </article>
    );
}

export default PaintingCardVar1
