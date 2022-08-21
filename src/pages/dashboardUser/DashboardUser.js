import React from 'react';
import './DashboardUser.css';
import PaintingCardsContainer from "../../components/paintingCardsContainer/PaintingCardsContainer";
import SideBar from "../../components/sideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
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
                        <PaintingCardsContainer/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default DashboardUser;