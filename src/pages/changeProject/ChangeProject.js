import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navigation from "../../components/navigation/Navigation";
import './../Form.css';

function ChangeProject() {
    const location = useLocation();
    const { project_id } = useParams();
    const { title } = location.state;
    const { finished } = location.state;
    const { start } = location.state;
    const { end } = location.state;
    const { height } = location.state;
    const { width } = location.state;
    const { medium } = location.state;
    const { subject } = location.state;
    const { description } = location.state;
    const { inspiration } = location.state;
    const [ project, setProject ] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = localStorage.getItem('token');
    const history = useHistory();

    function handleMessageChange(e) {
        const typedText = e.target.value;
        setMessage(typedText);
    }

    useEffect(() => {
        fetch(`http://localhost:8080/user/project/:project_id/${project_id}`).then(setProject)
        setMessage(description);
    }, [project_id])

    async function updateProject(p, e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.put(`http://localhost:8080/projects/${project_id}`, {
                title: p.title,
                isFinished: p.finished,
                dateStart: p.startdate,
                dateEnd: p.enddate,
                height: p.height,
                width: p.width,
                mediumType: p.mediumType,
                subject: p.subject,
                description: message,
                inspiration: p.inspiration
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            toggleSuccess(true);
            setTimeout(() => {
                history.goBack();
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
                            <p>De wijzigingen zijn opgeslagen.</p>
                        </section>
                        :
                        <section className="form-wrapper">
                            <p>De waardes uit de invoervelden worden op exacte inhoud opgeslagen.</p>
                            <p>Een leeg veld wordt ook als leeg opgeslagen en overschrijft daarmee eerder ingevoerde tekst.</p>
                            <form className="form" onSubmit={handleSubmit(updateProject)}>
                                <label htmlFor="titel">
                                    Een mooie titel*:
                                    <input
                                        type="title"
                                        id="title"
                                        defaultValue={title}
                                        className="form-textline"
                                        {...register("title", {
                                                required: "Dit is een verplicht veld.",
                                            }
                                        )}/>
                                </label>
                                {errors.title && <p className="error-label">{error.title.message}</p>}

                                <p>Het project is klaar*:</p>
                                <div className="form-radio-container" >
                                    <label htmlFor="field-no">
                                        <input
                                            type="radio"
                                            name="finished"
                                            value="false"
                                            checked={true}
                                            id="field-no"
                                            {...register("finished")}/>Nee
                                    </label>

                                    <label htmlFor="field-yes">
                                        <input
                                            type="radio"
                                            name="finished"
                                            value="true"
                                            checked={false}
                                            id="field-yes"
                                            {...register("finished")}/>Ja
                                    </label>
                                </div>

                                <label htmlFor="startdate">
                                    Startdatum van het project*:
                                    <input
                                        type="text"
                                        id="startdate"
                                        defaultValue={start}
                                        className="form-textline"
                                        {...register("startdate", {
                                                required: "Dit is een verplicht veld.",
                                            }
                                        )}/>
                                </label>
                                {errors.startDate && <p className="error-label">{error.startDate.message}</p>}


                                <label htmlFor="enddate">
                                    Einddatum van het project:
                                    <input
                                        type="text"
                                        id="enddate"
                                        defaultValue={end}
                                        className="form-textline"
                                        {...register("enddate")}/>
                                </label>

                                <p>Afmetingen:</p>
                                <div className="form-number-container">
                                    <label htmlFor="height">
                                        Hoogte:  <input
                                        type="number"
                                        id="height"
                                        defaultValue={height}
                                        className="form-measurement"
                                        {...register("height" )}/> cm.
                                    </label>

                                    <label htmlFor="width">
                                        Breedte:  <input
                                        type="number"
                                        id="width"
                                        defaultValue={width}
                                        className="form-measurement"
                                        {...register("width" )}/> cm.
                                    </label>
                                </div>

                                <label htmlFor="medium">
                                    Medium waarmee wordt gewerkt:
                                    <input
                                        type="text"
                                        id="medium"
                                        defaultValue={medium}
                                        className="form-textline"
                                        {...register("medium" )}/>
                                </label>

                                <label htmlFor="subject">
                                    Onderwerp:
                                    <input
                                        type="subject"
                                        id="subject"
                                        defaultValue={subject}
                                        className="form-textline"
                                        {...register("subject" )}/>
                                </label>

                                <label htmlFor="inspiration">
                                    Geïnspireerd door:
                                    <input
                                        type="inspiration"
                                        id="inspiration"
                                        defaultValue={inspiration}
                                        className="form-textline"
                                        {...register("inspiration" )}/>
                                </label>

                                <label htmlFor="message">Beschrijving:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    cols="65"
                                    rows="7"
                                    className="form-textarea"
                                />

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

export default ChangeProject;
