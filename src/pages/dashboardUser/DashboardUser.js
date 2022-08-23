import React from 'react';
import './DashboardUser.css';
import SideBar from "../../components/sideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import PaintingCardImg from "../../components/cards/paintingCardImg/PaintingCardImg";
import ButtonPlus from "../../components/buttons/buttonPlus/ButtonPlus";
import Button from "../../components/buttons/button/Button";
import paintingTubes from "../../assets/paint-tubes.jpg";
import persoon3 from "../../assets/person3.png"


function DashboardUser(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Dashboard" id="navigation"/>
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
                        <article className="dashboard-quote-area">
                            <h2>"Art should comfort the disturbed & disturb the comfortable"</h2>
                            <p> - Carlo Cruz - </p>
                        </article>
                        <article>
                            <p>Mijn laatste werken:</p>
                            <div className="painting-cards__container">
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint1"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint2"} ></PaintingCardImg>
                                <PaintingCardImg img={paintingTubes} imgDescription={"verftubes"} title={"paint3"} ></PaintingCardImg>
                            </div>
                            <div className="dasboard-user-content__button-plus">
                                <ButtonPlus>+</ButtonPlus>
                            </div>
                            <div className="dasboard-user-content__button">
                                <Button>naar alle projecten</Button>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default DashboardUser;