import React from 'react';
import './LandingPage.css';
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/buttons/button/Button";
import DescriptionTile from "../../components/descriptionTile/DescriptionTile";
import ReferenceCard from "../../components/referenceCard/ReferenceCard";
import ButtonOpaque from "../../components/buttons/buttonOpaque/ButtonOpaque";
import painthand from "../../assets/painting-hand.jpg";
import painttubes from "../../assets/paint-tubes.jpg";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";

function LandingPage(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container background-image">
                    <Navigation id="navigation" pageName={""}/>
                    <div className="header-content__hero-image">
                        <section className="header-content__hero">
                            <article>
                                <div className="header-content__herotext">
                                    <h1>"Creativiteit is de grootste rebellie in het bestaan"</h1>
                                    <p> - Osho - </p>
                                </div>
                                <div className="header-content__herotext">
                                    <p>Niets is toch fijner dan een moment voor jezelf creëren met doek, verf en
                                        kwasten!? Heerlijk even je zinnen verzetten en de wereld iets mooier maken met jouw
                                        artistieke inbreng. </p>
                                    <p>In MyPaintPholio kijk je waar je gebleven bent, en voeg je meteen nieuwe notities
                                        en foto's over de voortgang van je kunstwerk toe! Hoe handig is dat!?</p>
                                </div>
                            </article>
                            <div className="header-content__herobutton">
                                <Button>meer informatie</Button>
                                <ButtonOpaque>registreer meteen!</ButtonOpaque>
                            </div>
                        </section>
                    </div>
                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container">
                    <section id="description" className="description">
                        <DescriptionTile img={painthand}
                                         imgDescription={"easel with painting hand"}
                                         title={"Cum distinctio"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id magnam maxime
                                molestias odio quidem, quis tempora unde vel vero. Architecto debitis dignissimos dolor
                                eaque esse est ex excepturi, facere harum ipsum laboriosam quam quas quis rem sit,
                                temporibus veniam.</p>
                        </DescriptionTile>
                        <DescriptionTile img={painttubes}
                                         imgDescription={"tubes with oil paint"}
                                         title={"Suspendisse potenti"}>
                            <p>Donec sed sagittis augue. Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Aenean a vestibulum dolor, a ultrices neque. Donec
                                vehicula tortor erat, in sagittis orci viverra eu. Suspendisse accumsan pretium neque,
                                quis volutpat est eleifend nec. Cras consectetur lobortis laoreet. Vestibulum in turpis
                                urna. Aliquam erat volutpat. Nulla ex enim, bibendum in velit ut, rutrum gravida
                                felis.</p>
                        </DescriptionTile>
                    </section>

                    <section id="reference" className="background-image">
                        <div className="reference-wrapper">
                            <ReferenceCard
                                img={person3}
                                imgDescription="een persoon"
                                name="Aenan In Risus"
                            >
                                <p>Quisque id auctor nisl. Quisque et elementum mi. Curbitur congue metus lorem.</p>
                            </ReferenceCard>
                            <ReferenceCard
                                img={person2}
                                imgDescription="een persoon"
                                name="Vivamus Malesuada"
                            >
                                <p>Aenan in risus aliquet, pharetra neque in, cursus mi. Maecenas sit amet.</p>
                            </ReferenceCard>
                            <ReferenceCard
                                img={person1}
                                imgDescription="een persoon"
                                name="Quisque At Faucibus"
                            >
                                <p>Curabitur tempus at magna eget dignissim. In a consectetur ex.</p>
                            </ReferenceCard>
                        </div>
                    </section>
                    <section id="cta" className="cta">
                        <h2>Log ook al het moois dat jij toevoegt aan de wereld!</h2>
                        <div>
                            <Button>contact</Button>
                            <Button>registreren</Button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default LandingPage;