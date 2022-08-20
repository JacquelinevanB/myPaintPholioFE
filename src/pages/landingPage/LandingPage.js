import React from 'react';
import './LandingPage.css';
import Navigation from "../../components/navigation/Navigation";
import Hero from "../../components/hero/Hero";
import Button from "../../components/button/Button";
import DescriptionTile from "../../components/descriptiontile/DescriptionTile";
import painthand from "../../assets/painting-hand.jpg";
import painttubes from "../../assets/paint-tubes.jpg";


function LandingPage(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation id="navigation"/>
                    <Hero id="hero"/>
                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container">
                    <section className="description">
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
                    {/*<section className="">*/}

                    {/*</section>*/}
                    {/*<section className="">*/}

                    {/*</section>*/}
                </div>
            </main>

            <footer>

            </footer>

        </>
    );
}

export default LandingPage;