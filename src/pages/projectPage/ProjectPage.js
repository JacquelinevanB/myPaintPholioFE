import React from 'react';
import './ProjectPage.css';
import Navigation from "../../components/navigation/Navigation";
import SideBar from "../../components/sideBar/SideBar";
import Quote from "../../components/quote/Quote";
import ButtonPlus from "../../components/buttonPlus/ButtonPlus";
import UserProjectCollection from "../../components/collections/userProjectCollection/UserProjectCollection";


function ProjectPage(props) {

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Project pagina" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container projectpage-container">
                    <SideBar pageId={"project"} />
                    <section className="project-content">
                        <article>
                            <div className="project-content__button-plus">
                                <ButtonPlus>+</ButtonPlus>
                            </div>
                            <UserProjectCollection />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ProjectPage;