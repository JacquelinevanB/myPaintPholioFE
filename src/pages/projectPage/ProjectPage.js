import React, {useState} from 'react';
import './ProjectPage.css';
import Navigation from "../../components/navigation/Navigation";
import SideBar from "../../components/sideBar/SideBar";
import ButtonPlus from "../../components/buttonPlus/ButtonPlus";
import ReflectionCollection
    from "../../components/collections/reflectionCollection/ReflectionCollection";
import ReflectionCollectionVar1
    from "../../components/collections/reflectionCollection/ReflectionCollectionVar1";
import ProjectReflectionCollectionVar2
    from "../../components/collections/reflectionCollection/ReflectionCollectionVar2";
import dropdown from '../../assets/dropdown.jpg'


function ProjectPage(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Grote tegels");
    const options = ["Tegels", "Reflecties", "Vergelijken"];

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
                            </div>
                            {selectedOption === "Grote tegels" && <ReflectionCollection/> }
                            {selectedOption === "Reflecties" && <ReflectionCollectionVar1/>}
                            {selectedOption === "Vergelijken" && <ProjectReflectionCollectionVar2/>}
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ProjectPage;