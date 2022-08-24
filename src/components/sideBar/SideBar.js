import React from "react";
import Button from "../buttons/button/Button";
import './SideBar.css';


function SideBar({ name,
                     title,
                     img,
                     imgDescription,
                     fullName,
                     emailAddress,
                     userName,
                     totalProjects,
                     totalUpdates,
                     startDate,
                     endDate,
                     description,
                     measurement,
                     inspiration,
                     medium,
                     subject,
                     isFinished }) {

        if (name) {
            return  (
                <aside className="sidebar">
                    <h3>Welkom</h3>
                    <h3>{name}</h3>
                    <div className="image-wrapper">
                        <img src={img} alt={imgDescription}/>
                    </div>
                    <article className="user-project-profile">
                        <p>Naam volledig:</p>
                        <p>{fullName}</p>
                        <p>Emailadres:</p>
                        <p>{emailAddress}</p>
                        <p>Gebruikersnaam:</p>
                        <p>{userName}</p>
                        <p>Aantal projecten:</p>
                        <p>{totalProjects}</p>
                        <p>Aantal updates:</p>
                        <p>{totalUpdates}</p>
                    </article>
                    <Button>gegevens wijzigen</Button>
                </aside>
            )
        }
    return (
        <aside className="sidebar">
            <h3>{title}{isFinished}</h3>
            <div className="image-wrapper">
                <img src={img} alt={imgDescription}/>
            </div>
            <article className="user-project-profile">
                <p>Startdatum:</p>
                <p>{startDate}</p>
                <p>Einddatum:</p>
                <p>{endDate}</p>
                <p>Beschrijving:</p>
                <p>{description}</p>
                <p>Hoogte x breedte in cm:</p>
                <p>{measurement}</p>
                <p>Inspiratie:</p>
                <p>{inspiration}</p>
                <p>Medium:</p>
                <p>{medium}</p>
                <p>Onderwerp:</p>
                <p>{subject}</p>
            </article>
            <Button>gegevens wijzigen</Button>
        </aside>
    );
}

export default SideBar





