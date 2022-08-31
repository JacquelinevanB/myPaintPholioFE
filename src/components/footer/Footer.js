import React from 'react';
import logo from "../../assets/my-paintpholio-logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import './Footer.css';

function Footer() {
    return (
        <>
            <footer id="footer" className="footer outer-content-container">
                <div className="inner-content-container footer-container">
                    <div className="footer-content__logo">
                        <img src={logo} alt="logo" width="100px"/>
                    </div>
                    <div className="footer-content__text">
                        <p>Augustus 2022 © | Jacqueline van Burk</p>
                        <p>Eindopdracht Bootcamp Fullstack Developer  |  Novi Hogeschool</p>
                    </div>
                    <div>
                        <a href="#"><img src={facebook} alt="facebook logo" width="40px"/></a>
                        <a href="#"><img src={instagram} alt="instagram logo" width="40px"/></a>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default Footer;

