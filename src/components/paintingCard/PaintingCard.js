import React from 'react';
import './PaintingCard.css';

function PaintingCard({ img, imgDescription, title, url }) {

    return (
        <article className="painting-card">
            <span className="painting-card__title-wrapper">
                <p>{title}</p>
            </span>
            <span className="painting-card__image-wrapper">
                 <img src={img} alt={imgDescription} />
            </span>
        </article>
    );
}

export default PaintingCard