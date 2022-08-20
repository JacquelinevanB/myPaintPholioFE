import React from 'react';
import './DescriptionTile.css';

function DescriptionTile({ img, imgDescription, title, children }) {

    return (
        <>
            <article className="description-tile">
                <span className="description-tile__image-wrapper">
                     <img src={img} alt={imgDescription}/>
                </span>
                <div className="description-tile__info-container">
                    <h3>{title}</h3>
                    {children}
                </div>
            </article>
        </>
    );
}

export default DescriptionTile