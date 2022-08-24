import React from 'react';


function PaintingCardImg({ img, imgDescription, title, url }) {

    return (
        <article className="painting-card">
            <span className="painting-card__title-wrapper">
                <p>{title}</p>
            </span>
            <span className="painting-card__image-wrapper">
                 <img src={img}
                      alt={imgDescription}
                      url={url} />
            </span>
        </article>
    );
}

export default PaintingCardImg