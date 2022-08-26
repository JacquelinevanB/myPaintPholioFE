import React, {useState} from 'react';
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
import dropdown from '../../assets/dropdown.jpg'


function ProjectPage(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Grote tegels");
    const options = ["Grote tegels", "Reflecties", "Vergelijken"];

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () =>  {
        setSelectedOption(value);
        setIsOpen(false);
    }

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
                            <div>
                                <div className="dropdown-container">
                                    <div className="dropdown-header" onClick={toggling}>
                                        Weergave opties <img src={dropdown} alt="dropdown" width="15px"/>
                                        {isOpen && (
                                            <div className="dropdown-listcontainer">
                                                <ul className="dropdown-list">
                                                    {options.map(option => (
                                                        <li className="dropdown-item"
                                                            onClick={onOptionClicked(option)}
                                                            key={Math.random()}>
                                                            {option}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="project-content__button-plus">
                                    <ButtonPlus>+</ButtonPlus>
                                </div>
                            </div>
                            {selectedOption === "Grote tegels" && <ProjectReflectionCollection/> }
                            {selectedOption === "Reflecties" && <ProjectReflectionCollectionVar1/>}
                            {selectedOption === "Vergelijken" && <ProjectReflectionCollectionVar2/>}
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ProjectPage;