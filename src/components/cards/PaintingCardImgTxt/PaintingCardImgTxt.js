import React from 'react';
import './PaintingCardImgTxt.css';

function PaintingCardImgTxt({ img, imgDescription, title, url, date, children }) {

    return (
        <article className="painting-card__imgtxt">
            <span className="painting-card__image-wrapper">
                 <img src={img} alt={imgDescription} />
            </span>
            <div className="painting-card__title-wrapper">
                <h3>{date}</h3>
                {children}
            </div>
        </article>
    );
}

export default PaintingCardImgTxt

// <span className="description-tile__image-wrapper">
//     <img src={img} alt={imgDescription}/>
// </span>
// <div className="description-tile__info-container">
//     <h3>{title}</h3>
//     {children}
// </div>