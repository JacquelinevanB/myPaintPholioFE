import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import TotalUserProjects from "../profileAmount/TotalUserProjects";
import ProfilePicture from "../profilePicture/ProfilePicture";
import AddOrEditProfilePic from "../../addProfilePicture/AddOrEditProfilePic";

function ProfileUser() {
   const [ showPictureHandler, setShowPictureHandler ] = useState(false);
   const { user } = useContext(AuthContext);

   return (
        <>
            <h3>Welkom</h3>
            <h3>{user.firstname}!</h3>
            <button
                className="invisible-button"
                onClick={() => setShowPictureHandler(!showPictureHandler)}
            ></button>
            <ProfilePicture />
            {showPictureHandler && <AddOrEditProfilePic/>}
            <article className="project-profile">
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
//

export default ProfileUser;