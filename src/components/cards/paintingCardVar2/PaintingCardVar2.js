import React from 'react';
import './PaintingCardVar2.css';

function PaintingCardVar2({ img, imgDescription, date, text, onClick }) {

    return (
        <article className="painting-card__var2">
            <span className="painting-card__var2-imgwrapper">
                 <img src={img}
                      alt={imgDescription}
                      onClick={onClick}
                 />
            </span>
            <span className="painting-card__var2-textwrapper">
                <h4>{date}</h4>
                <p>{text}</p>
            </span>
            <span>
                <label htmlFor=""></label>
            </span>
        </article>
    );
}

export default PaintingCardVar2;
