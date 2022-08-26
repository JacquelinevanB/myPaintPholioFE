import React from 'react';
import './ProjectPage.css';
import Navigation from "../../components/navigation/Navigation";
import SideBar from "../../components/sideBar/SideBar";
import ButtonPlus from "../../components/buttonPlus/ButtonPlus";
import ProjectReflectionCollection
    from "../../components/collections/projectReflectionCollection/ProjectReflectionCollection";
import ProjectReflectionCollectionVar1
    from "../../components/collections/projectReflectionCollection/ProjectReflectionCollectionVar1";
import ProjectReflectionCollectionVar2
    from "../../components/collections/projectReflectionCollection/ProjectReflectionCollectionVar2";


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
                            <ProjectReflectionCollectionVar2 />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ProjectPage;