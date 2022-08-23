import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext"


function ProfilePicture() {

    const { user: { username } } = useContext(AuthContext);


    return (
        <>
            <section className="profile-user">
                <p><strong>Naam volledig:</strong></p>
                <p>{person_firstname} {person_lastname}</p>
                <p><strong>Emailadres:</strong></p>
                <p>{person_email_address}</p>
                <p><strong>Gebruikersnaam:</strong></p>
                <p>{username}</p>
                <p><strong>Aantal projecten:</strong></p>
                <p>{person_total_projects}</p>
                <p><strong>Aantal updates:</strong></p>
                <p>{person_total_updates}</p>
            </section>
        </>
    )

}