import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import profilepic from "../../../assets/default-profilepic.png"

//CONNECTIE MET USER
//CSS

function ProfilePicture() {

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:8080/users/${username}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setUser(response.data);
            } catch (e) {
                console.error('Something went wrong...', e);
            }
        }
        getUser();
    }, []);

    return (
        <div className="profile-picture">
            {user.image ?
                <img src={user.image.url} alt="profielfoto"/>
                :
                <img src={profilepic} alt="standaard profielplaatje"/>
            }
        </div>
    )
}

export default ProfilePicture;