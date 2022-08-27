import React from 'react';
import './PaintingCard.css'


function PaintingCard({ img, imgDescription, title, onClick }) {

    return (
        <article className="painting-card">
            <span className="painting-card__title-wrapper">
                <p>{title}</p>
            </span>
            <span className="painting-card__image-wrapper">
                 <img src={img}
                      alt={imgDescription}
                      onClick={onClick}
                 />
            </span>
        </article>
    );
}

export default PaintingCard