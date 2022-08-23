import React from 'react';
import './OneProjectPage.css';
import Navigation from "../../components/navigation/Navigation";
import SideBar from "../../components/sideBar/SideBar";
import PaintingCardImg from "../../components/cards/paintingCardImg/PaintingCardImg";
import ButtonPlus from "../../components/buttons/buttonPlus/ButtonPlus";
import paintingHand from "../../assets/painting-hand.jpg"

function OneProjectPageOptionTwo(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Project pagina" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-user-container">
                    <SideBar
                        title={"My pretty painting"}
                        img={paintingHand}
                        imgDescription={"schilderij met schilderende persoon"}
                        startDate={"22-08-2021"}
                        endDate={"12-2-2022"}
                        description={"An impression of the landscape but then deconstructed to blocks."}
                        measurement={"80cm x 60cm"}
                        inspiration={"Paul Klee"}
                        medium={"oilpaint"}
                        subject={"landscape"}
                    />
                    <section className="dashboard-user-content">
                        <article>
                            <div className="painting-cards__container-option2">
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint1"} />
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint2"} />
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint3"} />
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint4"} />
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint5"} />
                                <PaintingCardImg img={paintingHand} imgDescription={"verftubes"} title={"paint6"} />
                            </div>
                            <div className="dasboard-user-content__button-plus">
                                <ButtonPlus>+</ButtonPlus>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default OneProjectPageOptionTwo