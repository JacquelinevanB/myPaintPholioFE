import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PaintingCardVar2 from "../../cards/paintingCardVar2/PaintingCardVar2";
import ButtonPlus from "../../buttonPlus/ButtonPlus";
import dummy from '../../../assets/placeholder-image.png';
import '../Collection.css';

function ProjectReflectionCollectionVar1() {
    const [reflectionCollection, setReflectionCollection] = useState([]);
    const [checked, setChecked] = useState(false);
    const [selection, setSelection] = useState([]);
    const [showSelection, setShowSelection] = useState(false);
    const {project_id} = useParams();
    const history = useHistory();
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    function resetSelection() {
        setChecked(false);
        setSelection([]);
        setShowSelection(false);
    }

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
            } catch (error) {
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

    console.log(selection);

    return (
        <>
            <div className="project-content__button-plus">
                <ButtonPlus
                    pageName={"Project pagina"}
                    projectId={project_id}
                >+</ButtonPlus>
            </div>
            {!showSelection ?
                <>
                    <section className="painting-cards__container">
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
                                                key={reflection.id}
                                                defaultChecked={checked}
                                                onChange={() => setSelection(checked => [...checked, reflection])}
                                            />
                                        </label>
                                        <PaintingCardVar2 key={reflection.id}
                                                          date={reflection.dateMade}
                                                          text={reflection.reflectionText}
                                                          imgDescription={"foto van schilderproject"}
                                                          img={reflection.fileUploadResponse ? reflection.fileUploadResponse.url : dummy}
                                                          onClick={() => redirect(reflection.id)}/>
                                    </span>
                                )
                            })}
                    </section>
                    <button
                        type="button"
                        onClick={() => setShowSelection(!showSelection)}
                    >
                        selectie tonen
                    </button>
                </>
                :
                <>
                    {selection.length < 2 && <p>Kies twee afbeeldingen om naast elkaar te zien.</p>}
                    {selection.length > 2 && <p>Kies maximaal twee afbeeldingen om naast elkaar te zien.</p>}
                    {selection.length === 2 &&
                        <>
                            <div className="selection-cards__container">
                                <img src={selection[0].fileUploadResponse && selection[0].fileUploadResponse.url}
                                     alt=""
                                     className="selection-image"
                                />
                                <img src={selection[1].fileUploadResponse && selection[1].fileUploadResponse.url}
                                     alt=""
                                     className="selection-image"
                                />
                            </div>
                        </>
                    }
                    <button
                        type="button"
                        onClick={() => resetSelection()}
                    >
                        terug
                    </button>
                </>
            }
        </>
    )
}

export default ProjectReflectionCollectionVar1;
