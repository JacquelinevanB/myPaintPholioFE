import React from 'react';
import './OneProjectPage.css';
import Navigation from "../../components/navigation/Navigation";
import ButtonPlus from "../../components/buttons/buttonPlus/ButtonPlus";
import UserProjectCollection from "../../components/collections/userProjectCollection/UserProjectCollection";


function OneProjectPage(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Project pagina" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-user-container">
                    <>
                    </>
                    <section className="dashboard-user-content">
                        <article>
                            <div className="painting-cards__container">
                                <UserProjectCollection />
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

export default OneProjectPage;