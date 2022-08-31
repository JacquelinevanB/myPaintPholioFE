import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PaintingCardVar1 from "../../cards/paintingCardVar1/PaintingCardVar1";
import ButtonPlus from "../../buttonPlus/ButtonPlus";
import dummy from '../../../assets/placeholder-image.png';
import '../Collection.css';

function ReflectionCollectionVar1() {
    const [ reflectionCollection, setReflectionCollection ] = useState([]);
    const { project_id } = useParams();
    const history = useHistory();
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    useEffect(() => {
        async function fetchReflectionCollection() {
            try {
                const response = await axios.get(`http://localhost:8080/reflections/project/${project_id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });
                setReflectionCollection(response.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchReflectionCollection();
        return function cleanup() {
            source.cancel();
        }
    }, []);

    function redirect(reflectionId) {
        history.push(`/user/reflection/${reflectionId}`);
    }

    return (
        <>
            <div className="project-content__button-plus">
                <ButtonPlus
                    pageName={"Project pagina"}
                    projectId={project_id}
                >+</ButtonPlus>
            </div>
            <section className="painting-cards__container">
                {(reflectionCollection
                    .sort((a, b) => b.id - a.id))
                    .map((reflection) => {
                        return (
                            <PaintingCardVar1 key={reflection.id}
                                              date={reflection.dateMade}
                                              text={reflection.reflectionText}
                                              imgDescription={"foto van schilderproject"}
                                              img={reflection.fileUploadResponse ? reflection.fileUploadResponse.url : dummy }
                                              onClick={() => redirect(reflection.id)}/>
                        )
                    })}

            </section>
        </>
    )
}

export default ReflectionCollectionVar1;