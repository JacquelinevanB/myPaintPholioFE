import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../../../context/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import finished from '../../../assets/finished.png'
import progress from '../../../assets/inprogress.png'


function ProfileProject() {
    const [ project, setProject ] = useState([]);
    const { project_id } = useParams();
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    useEffect(() => {

        async function fetchProjectInfo() {
            try {
                const response = await axios.get(`http://localhost:8080/projects/${project_id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });
                console.log(response.data);
                setProject(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchProjectInfo()

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <>

            <h3>{project.title}</h3>
            {project.finished === true ?
                <img src={finished} alt="finished icon"/>
                :
                <img src={progress} alt="finished icon"/>
            }
            <article className="project-profile">
                <p><strong>Startdatum:</strong></p>
                <p>{project.dateStart}</p>
                <p><strong>Einddatum:</strong></p>
                {project.dateEnd === null ?
                    <p>Nog niet afgerond</p>
                    :
                    <p>{project.dateEnd}</p>
                }
                <p><strong>Afmeting:</strong></p>
                <p>{project.height}cm x {project.width}cm</p>
                <p><strong>Medium:</strong></p>
                <p>{project.mediumType}</p>
                <p><strong>Onderwerp:</strong></p>
                <p>{project.subject}</p>
                <p><strong>Beschrijving:</strong></p>
                <p>{project.description}</p>
                <p><strong>Inspiratie:</strong></p>
                <p>{project.inspiration}</p>
            </article>
            <Link to={{
                pathname: `/changeproject/${project_id}`,
                state: {
                    title: project.title,
                    finished: project.finished,
                    start: project.dateStart,
                    end: project.dateEnd,
                    height: project.height,
                    width: project.width,
                    medium: project.mediumType,
                    subject: project.subject,
                    description: project.description,
                    inspiration: project.inspiration
                }
            }} ><button type="button" className="button-profile" >Bewerken</button></Link>
        </>
    )
}

export default ProfileProject;