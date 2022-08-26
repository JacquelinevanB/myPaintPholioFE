import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import {useHistory, useParams} from "react-router-dom";
import dummy from '../../../assets/placeholder-image.png'
import PaintingCardVar2 from "../../cards/paintingCardVar2/PaintingCardVar2";


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
            {/*<button*/}
            {/*    onClick={}*/}
            {/*>*/}
            {/*    Bekijk selectie*/}
            {/*</button>*/}
        </>
    )
}

export default ProjectReflectionCollectionVar1;

//1. als selectiebox geklikt wordt, dan wordt het object van de reflectie toegevoegd aan de state
//2. wanneer op de button geklik wordt, wordt er een methode aangeroepen
//3. de methode krijgt de twee objecten mee
//4. in de methode staat een verwijzing naar een pagina die de twee objecten als props oppakt
//2. alleen de eerste 2 [0] en [1] laten zien op de volgende bladzijde