import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
import axios from "axios";
import profilepic from "../../../assets/default-profilepic.png"

function ProfilePicture() {
    const [ user, setUser ] = useState([]);
    const token = localStorage.getItem('token');
    const { user: { username }} = useContext( AuthContext );

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
        <div className="profile-picture image-wrapper">
            {user.file ?
                <img src={user.file.url} alt="profielfoto"/>
                :
                <img src={profilepic} alt="standaard profielplaatje"/>
            }
        </div>
    )
}

export default ProfilePicture;