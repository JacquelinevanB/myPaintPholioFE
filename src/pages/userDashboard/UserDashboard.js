import React from 'react';
import './UserDashboard.css';
import SideBar from "../../components/sideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import ButtonPlus from "../../components/buttonPlus/ButtonPlus";
import ProjectCollection from "../../components/collections/projectCollection/ProjectCollection";
import Quote from "../../components/quote/Quote";

function UserDashboard(props) {

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Dashboard" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-user-container">
                    <SideBar />
                    <section className="dashboard-user-content">
                        <Quote/>
                        <article>
                            <div className="dasboard-user-content__button-plus">
                                <ButtonPlus pageName={"Dashboard"}>+</ButtonPlus>
                            </div>
                            <ProjectCollection />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default UserDashboard;