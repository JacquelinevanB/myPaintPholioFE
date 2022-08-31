import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
import axios from "axios";

function TotalUserReflections() {
    const [ projectCollection, setProjectCollection ] = useState([]);
    const [ reflectionCollection, setReflectionCollection ] = useState([]);
    const [ totalReflections, setTotalReflections ] = useState(0);
    const {user: {username}} = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    function countReflections() {
        projectCollection.map((project) => {
                const projectReflections = reflectionCollection.filter((reflection) => { return reflection.projectDto.id === project.id })
                setTotalReflections((prevState) => + projectReflections.length);
            });
    }

    useEffect(() => {
        async function fetchProjectCollection() {
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    axios.get(`http://localhost:8080/projects/user/${username}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        }),
                    axios.get(`http://localhost:8080/reflections/admin`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        })
                ])
                setProjectCollection(responseOne.data);
                setReflectionCollection(responseTwo.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchProjectCollection();
        return function cleanup() {
            source.cancel();
        }
    },[]);

    countReflections();

    return (
        <>
            <section className="total-user-reflection">
                <p>{totalReflections}</p>
            </section>
        </>
    )
}

export default TotalUserReflections;