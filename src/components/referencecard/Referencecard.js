import React from 'react';
import './Referencecard.css';

function Referencecard({ label, img, imgDescription, name, children }) {

    return (
        <article className="reference-card">
                <span className="reference-card__image-wrapper">
                     <img src={img} alt={imgDescription}/>
                </span>
            <div className="reference-card__info-container">
                <h4>{name}</h4>
                {children}
            </div>
        </article>
    );
}

export default Referencecard