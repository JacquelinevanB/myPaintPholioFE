import React from 'react';
import './AllProjectsPage.css';
import Navigation from "../../components/navigation/Navigation";
import SideBar from "../../components/sideBar/SideBar";
import PaintingCardImg from "../../components/cards/paintingCardImg/PaintingCardImg";
import ButtonPlus from "../../components/buttons/buttonPlus/ButtonPlus";
import Button from "../../components/buttons/button/Button";
import persoon3 from "../../assets/person3.png";
import paintingTubes from "../../assets/paint-tubes.jpg";

function AllProjectsPage(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName={"Projecten"}/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-user-container">
                    <SideBar
                        headerText={"Welkom"}
                        name={"Naam"}
                        img={persoon3}
                        imgDescription={"profielfoto"}
                        fullName={"Jacqueline van Burk"}
                        emailAddress={"jacqueline@test.nl"}
                        userName={"jacqueline"}
                        totalProjects={6}
                        totalUpdates={28}
                    />
                    <section className="dashboard-user-content">
                        <article>
                            <p>Al mijn werken:</p>
                            <div className="painting-cards__container">
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint1"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint2"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint3"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint4"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint5"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint6"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint7"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint8"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint9"} ></PaintingCardImg>
                            </div>
                            <div className="dasboard-user-content__button-plus">
                                <ButtonPlus>+</ButtonPlus>
                            </div>
                            <div className="dasboard-user-content__button">
                                <Button>laad meer projecten</Button>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default AllProjectsPage;