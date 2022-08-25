import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext"
import TotalUserProjects from "../profileAmount/TotalUserProjects";

//CONNECTIE MET PAGINA CSS

function ProfileUser() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <h3>Welkom</h3>
            <h3>{user.firstname}!</h3>
            <div className="image-wrapper">
                <img src={user.profilepic} alt="profielfoto"/>
            </div>
            <article className="user-project-profile">
                <p><strong>Naam:</strong> </p>
                <p>{user.firstname} {user.lastname}</p>
                <p><strong>Email-adres:</strong></p>
                <p>{user.emailaddress}</p>
                <p><strong>Gebruikersnaam:</strong></p>
                <p>{user.username}</p>
                <p><strong>Aantal projecten:</strong></p>
                <TotalUserProjects />
            </article>
        </>
    )
}

export default ProfileUser;