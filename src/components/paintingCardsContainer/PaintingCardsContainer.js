import React from 'react';
import './PaintingCardsContainer.css';
import PaintingCard from "../paintingCard/PaintingCard";
import ButtonPlus from "../buttons/buttonPlus/ButtonPlus";
import Button from "../buttons/button/Button";
import paintingTubes from "../../assets/paint-tubes.jpg";


function PaintingCardsContainer({ img, imgDescription, title,}) {

    return (
        <article>
            <p>Mijn laatste projecten:</p>
            <div className="painting-cards__container">
                <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint1"} ></PaintingCard>
                <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint2"} ></PaintingCard>
                <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint3"} ></PaintingCard>
            </div>
            <div className="dasboard-user-content__button-plus">
                <ButtonPlus>+</ButtonPlus>
            </div>
            <div className="dasboard-user-content__button">
                <Button>naar alle projecten</Button>
            </div>
        </article>
    );
}

export default PaintingCardsContainer