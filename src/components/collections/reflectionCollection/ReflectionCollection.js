import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import {useHistory, useParams} from "react-router-dom";
import PaintingCard from "../../cards/paintingCard/PaintingCard";
import dummy from '../../../assets/placeholder-image.png'
import '../Collection.css';


//CSS

function ReflectionCollection() {
    const [ reflectionCollection, setReflectionCollection ] = useState([]);
    const {user: {username}} = useContext(AuthContext);
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
        history.push(`/user/project/reflection/${reflectionId}`)
    }

    return (
        <>
            <section className="painting-cards__container">
                {(reflectionCollection
                    .sort((a, b) => a.id - b.id))
                    .map((reflection) => {
                        return (
                            <PaintingCard key={reflection.id}
                                          title={reflection.dateMade}
                                          imgDescription={"foto van schilderproject"}
                                          img={reflection.fileUploadResponse ? reflection.fileUploadResponse.url : dummy }
                                          url={reflection.fileUploadResponse.url}
                                          onClick={() => redirect(reflection.id)}/>
                        )
                    })}
            </section>
        </>
    )
}

export default ReflectionCollection;