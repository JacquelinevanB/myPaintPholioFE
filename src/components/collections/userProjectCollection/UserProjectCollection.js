import React, { useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import PaintingCardImg from "../../cards/paintingCardImg/PaintingCardImg";
import dummy from '../../../assets/placeholder-image.png'
import './UserProjectCollection.css';

//CSS

function UserProjectCollection() {
    const history = useHistory();
    // const {user: {username}} = useContext(AuthContext);
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJjZWwiLCJleHAiOjE2NjIxOTM3NzEsImlhdCI6MTY2MTMyOTc3MX0.gzI3y8qhHCsS-VC4REIDi9a3g94xb9tZRMi2ESquEjo';
    const [ projectCollection, setProjectCollection ] = useState([]);
    const [ updateCollection, setUpdateCollection ] = useState([]);
    const [ visible, setVisible ] = useState(3);

    useEffect(() => {
        async function getProjectCollection() {
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    axios.get(`http://localhost:8080/projects/user/ingrid`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    ),
                    axios.get(`http://localhost:8080/reflections/admin`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    )
                ])
                console.log(responseOne.data);
                setProjectCollection(responseOne.data);
                console.log(responseTwo.data);
                setUpdateCollection(responseTwo.data);
            } catch(error) {
                console.error(error);
            }
        }
        getProjectCollection();


    },[])

    function redirect(projectId) {
        history.push(`/user/project/${projectId}`)
    }

    return (
        <>
            <section className="painting-cards__container">
                {(projectCollection
                    .sort((a, b) => b.id - a.id))
                    .map((project) => {
                        const projectUpdate = (updateCollection
                            .sort((a, b) => b.id - a.id))
                            .find((update) => { return update.projectDto.id === project.id });
                        return (
                            <PaintingCardImg key={project.id}
                                             title={project.title}
                                             imgDescription={"foto van schilderproject"}
                                             img={projectUpdate ? projectUpdate.fileUploadResponse.url : dummy }
                                             url={projectUpdate.fileUploadResponse.url}
                                             onClick={() => redirect(project.id)}
                            />
                        )
                })}
            </section>
        </>
    )
}

export default UserProjectCollection;

