import React, { useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import PaintingCardImg from "../../cards/paintingCardImg/PaintingCardImg";
import dummy from '../../../assets/placeholder-image.png'
import './UserProjectCollection.css';

//CSS
//de token en de user nog verwerken in de async function requestpaden

function UserProjectCollection() {
    const history = useHistory();
    // const {user: {username}} = useContext(AuthContext);
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJjZWwiLCJleHAiOjE2NjIyMTgyMzksImlhdCI6MTY2MTM1NDIzOX0.ofK8WAWMDmEQex5Zcg9u7DjA9NNJ9INSlDK_eY7oowI';
    const [ projectCollection, setProjectCollection ] = useState([]);
    const [ updateCollection, setUpdateCollection ] = useState([]);



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
                            projectUpdate ?
                                <PaintingCardImg key={project.id}
                                                 title={project.title}
                                                 imgDescription={"foto van schilderproject"}
                                                 img={projectUpdate ? projectUpdate.fileUploadResponse.url : dummy }
                                                 url={projectUpdate.fileUploadResponse.url}
                                                 onClick={() => redirect(project.id)}/>
                                :
                                <PaintingCardImg key={project.id}
                                                 title={project.title}
                                                 imgDescription={"foto van schilderproject"}
                                                 img={dummy }
                                                 onClick={() => redirect(project.id)}/>
                        )
                    })}
            </section>
        </>
    )
}

export default UserProjectCollection;
