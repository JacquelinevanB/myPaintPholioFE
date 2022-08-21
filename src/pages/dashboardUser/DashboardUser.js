import React from 'react';
import './DashboardUser.css';
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/buttons/button/Button";
import ButtonPlus from "../../components/buttons/buttonPlus/ButtonPlus";
import PaintingCard from "../../components/paintingCard/PaintingCard";
import persoon3 from "../../assets/person3.png"
import paintingTubes from "../../assets/paint-tubes.jpg"



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
                    <aside className="sidebar">
                        <h3>Welkom</h3>
                        <h3>Naam!</h3>
                        <div className="image-wrapper">
                            <img src={persoon3} alt="profielfoto"/>
                        </div>
                        <article className="user-profile">
                            <p>Naam volledig:</p>
                            <p>Jacqueline van Burk</p>{/*    query*/}
                            <p>Emailadres:</p>
                            <p>jacqueline@test.nl</p>{/*    query*/}
                            <p>Gebruikersnaam:</p>
                            <p>jacqueline</p>{/*    query*/}
                            <p>Aantal projecten:</p>
                            <p>6</p>{/*    query*/}
                            <p>Aantal updates:</p>
                            <p>28</p>{/*    query*/}
                        </article>
                        <Button>gegevens wijzigen</Button>
                    </aside>

                    <section className="dashboard-user-content">
                        <article className="dashboard-quote-area">
                            <h2>"Art should comfort the disturbed & disturb the comfortable"</h2>
                            <p> - Carlo Cruz - </p>
                        </article>
                        <p>Mijn laatste projecten:</p>
                        <div className="painting-cards__container">
                            <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint1"} ></PaintingCard>
                            <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint2"} ></PaintingCard>
                            <PaintingCard img={paintingTubes} imgDescription={"verftubes"} title={"paint3"} ></PaintingCard>
                        </div>
                        <div className="dasboard-user-content__button">
                            <Button>naar alle projecten</Button>
                        </div>
                        <div className="dasboard-user-content__plus-button">
                            <ButtonPlus>+</ButtonPlus>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}

export default DashboardUser;