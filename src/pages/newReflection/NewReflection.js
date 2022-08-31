import React, { useState } from 'react';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import checkImageSize from "../../helpers/checkImageSize";
import Navigation from "../../components/navigation/Navigation";
import './../Form.css';


function NewReflection() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const {project_id} = useParams();
    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = localStorage.getItem('token');
    const history = useHistory();

    function handleMessageChange(e) {
        const typedText = e.target.value;
        console.log(typedText);
        setMessage(typedText);
    }

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function newReflection(i, e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.post(`http://localhost:8080/reflections/add_reflection/${project_id}`, {
                dateMade: i.date,
                reflectionText: message,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })

            const reflectionId = response.data.id;
            const formData = new FormData();
            formData.append("file", file);
            await axios.post(`http://localhost:8080/reflections/${reflectionId}/image`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            })
            toggleSuccess(true);
            setTimeout(() => {
                history.push(`/user/project/${project_id}`)
            }, 2000);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Nieuwe reflectie" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    {success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>De reflectie is opgeslagen.</p>
                        </section>
                        :
                        <section className="form-wrapper">
                            <p>Vul de velden hieronder.</p>
                            <p>De nieuwe reflectie wordt gekoppeld aan het project dat je zojuist bekeek.</p>
                            <form className="form" onSubmit={handleSubmit(newReflection)}>
                                <label htmlFor="date">
                                    Vul de datum in die jij op de reflectie wil zien:
                                    <br/>
                                    <input
                                        type="text"
                                        id="date"
                                        className="form-textline"
                                        {...register("date", {
                                                required: "Dit is een verplicht veld.",
                                            }
                                        )}/>
                                </label>
                                {errors.date && <p className="error-label">{error.date.message}</p>}
                                <br/>

                                <label htmlFor="message">Jouw reflectietekst:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    cols="65"
                                    rows="12"
                                    className="form-textarea"
                                />
                                <br/>


                                <label htmlFor="profile-image">
                                    Kies afbeelding:
                                    <br/>
                                    <input type="file"
                                           name="image-field"
                                           id="project-image"
                                           required={true}
                                           onChange={handleImageChange}/>
                                </label>
                                {previewUrl &&
                                    <label className="form-image-wrapper">
                                        Preview:
                                        <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                                             className="image-preview"/>
                                    </label>
                                }
                                {checkImageSize(file)}
                                <br/>

                                <div className="form-button-container">
                                    <button
                                        type="submit"
                                        className="form-button"
                                        disabled={loading}
                                    >
                                        Opslaan
                                    </button>
                                    <button
                                        type="button"
                                        className="form-button"
                                        onClick={history.goBack}
                                    >
                                        Annuleren
                                    </button>
                                </div>
                            </form>
                        </section>
                    }
                </div>
            </main>
        </>
    );
}

export default NewReflection;
