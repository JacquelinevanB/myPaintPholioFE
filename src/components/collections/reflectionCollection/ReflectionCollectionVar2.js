import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import {useHistory, useParams} from "react-router-dom";
import dummy from '../../../assets/placeholder-image.png'
import PaintingCardVar2 from "../../cards/paintingCardVar2/PaintingCardVar2";
import '../Collection.css';

//CSS

function ProjectReflectionCollectionVar1() {
    const [ reflectionCollection, setReflectionCollection ] = useState([]);
    const [ checked, setChecked ] = useState([]);
    const { user } = useContext(AuthContext);
    const { project_id } = useParams();
    const history = useHistory();
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    useEffect(() => {
        setChecked([]);
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
        history.push(`/user/reflection/${reflectionId}`)
    }

    return (
        <>
            <section className="painting-cards__container">
                <p>De selectieweergave is binnenkort functioneel.</p>
                {(reflectionCollection
                    .sort((a, b) => b.id - a.id))
                    .map((reflection) => {
                        return (
                            <span className="painting-cards__helper-wrapper">
                                <label htmlFor="selection"
                                       className="painting-cards__checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="selection"
                                        defaultChecked={null}
                                        onChange={() => setChecked(checked => [...checked, reflection])}
                                    />
                                </label>
                                <PaintingCardVar2 key={reflection.id}
                                                  date={reflection.dateMade}
                                                  text={reflection.reflectionText}
                                                  imgDescription={"foto van schilderproject"}
                                                  img={reflection.fileUploadResponse ? reflection.fileUploadResponse.url : dummy }
                                                  url={reflection.fileUploadResponse.url}
                                                  onClick={() => redirect(reflection.id)}/>
                            </span>
                        )
                    })}
            </section>
        </>
    )
}

export default ProjectReflectionCollectionVar1;
