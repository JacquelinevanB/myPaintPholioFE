import React from 'react';
import './Hero.css';
import Button from "../button/Button";

function Hero() {

    return (
        <div className="header-content__hero-image">
            <section className="header-content__hero">
                <article >
                    <div className="header-content__herotext">
                        <h1 >"Creativiteit is de grootste rebellie in het bestaan"</h1>
                        <p> - Osho - </p>
                    </div>
                    <div className="header-content__herotext">
                        <p>Niets is toch fijner dan een moment voor jezelf creëren met doek, verf en kwasten!?
                            Heerlijk even je zinnen verzetten en alles van je af schilderen. Met een kop thee
                            of een lekker glas wijn.</p>
                        <p>In MyPaintPholio kijk je waar je gebleven bent en voeg je meteen nieuwe notities en foto's
                            van je kunstwerk toe! Hoe handig is dat!?</p>
                        </div>
                </article>
                <div className="header-content__herobutton">
                    <Button>meer informatie</Button>
                    <Button>registreer meteen!</Button>
                </div>
            </section>
        </div>
    );
}

export default Hero;