import React from 'react';


function PaintingCardImg({ img, imgDescription, title, url, onClick }) {

    return (
        <article className="painting-card">
            <span className="painting-card__title-wrapper">
                <p>{title}</p>
            </span>
            <span className="painting-card__image-wrapper">
                 <img src={img}
                      alt={imgDescription}
                      url={url}
                      onClick={onClick}
                 />
            </span>
        </article>
    );
}

export default PaintingCardImg