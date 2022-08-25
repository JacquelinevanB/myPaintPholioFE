import React, {useContext, useEffect} from "react";
import { AuthContext } from "../../../context/AuthContext"
import TotalUserProjects from "../profileAmount/TotalUserProjects";
import axios from "axios";

function ProfileUser() {
   const { user } = useContext(AuthContext);

   useEffect(() => {
       async function fetchUserData(id, token) {
           try {
               const result = await axios.get(`http://localhost:8080/users/${id}`, {
                   headers: {
                       "Content-Type": "application/json",
                       Authorization: `Bearer ${token}`,
                   },
               });
               console.log(result.data);

               toggleIsAuth({
                   ...isAuth,
                   isAuth: true,
                   user: {
                       username: result.data.username,
                       password: result.data.password,
                       role: result.data.authorities[0].authority,
                       firstname: result.data.firstName,
                       lastname: result.data.lastName,
                       emailaddress: result.data.emailAddress
                   },
                   status: 'done',
               });

               if (result.data.authorities[0].authority === "ROLE_ADMIN") {
                   history.push('/admindashboard');
               } else {
                   history.push('/userdashboard');
               }
           } catch (e) {
               console.error(e);
               toggleIsAuth({
                   isAuth: false,
                   user: null,
                   status: 'done',
               });
           }
       }
   })


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