import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import './ReflectionPage.css';

function ReflectionPage() {
    const [ reflection, setReflection ] = useState([]);
    const { reflection_id } = useParams();
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    useEffect(() => {
        async function fetchReflectionInfo() {
            try {
                const response = await axios.get(`http://localhost:8080/reflections/${reflection_id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });
                setReflection(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchReflectionInfo()

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Reflectie pagina" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container reflectionpage-container">
                    <section className="reflection-content">
                        <article>
                            <h3>{reflection.dateMade}</h3>
                            <div>
                                <p><strong>reflectie:</strong></p>
                                <p>{reflection.reflectionText}</p>
                            </div>
                            <Link to={{
                                pathname: `/changereflection/${reflection_id}`,
                                state: {id: reflection_id, date: reflection.dateMade, text: reflection.reflectionText}
                            }} ><button>Bewerken</button></Link>

                        </article>
                        <div className="reflection-image-wrapper">
                            <img src={reflection.fileUploadResponse && reflection.fileUploadResponse.url} alt=""/>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default ReflectionPage;