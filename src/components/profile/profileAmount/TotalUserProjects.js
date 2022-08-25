import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
import axios from "axios";

function TotalUserProjects() {
    const [ projectCollection, setProjectCollection ] = useState([]);
    const {user: {username}} = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    useEffect(() => {
        async function fetchProjectCollection() {
            try {
                const result = await axios.get(`http://localhost:8080/projects/user/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                })
                setProjectCollection(result.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchProjectCollection();

        return function cleanup() {
            source.cancel();
        }
    },[]);

    return (
        <>
            <section className="total-user-project">
                <p>{projectCollection.length}</p>
            </section>
        </>
    )
}

export default TotalUserProjects;