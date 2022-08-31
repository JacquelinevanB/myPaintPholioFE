import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import './../Form.css';


function NewProject() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const { user: { username } } = useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = localStorage.getItem('token');
    const history = useHistory();

    function handleMessageChange(e) {
        const typedText = e.target.value;
        console.log(typedText);
        setMessage(typedText);
    }

    async function newProject(p, e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.post(`http://localhost:8080/projects/add_project/${username}`, {
                dateStart: p.startdate,
                dateEnd: p.enddate,
                description: message,
                height: p.height,
                inspiration: p.inspiration,
                isFinished:p.finished,
                mediumType: p.medium,
                subject: p.subject,
                title: p.title,
                width: p.width
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            toggleSuccess(true);
            setTimeout(() => {
                history.push(`/userdashboard`)
            }, 2000);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return(
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Nieuw project" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    {success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>Het nieuwe project is opgeslagen.</p>
                        </section>
                        :
                        <section className="form-wrapper">
                            <p>Vul de velden hieronder.</p>
                            <form className="form" onSubmit={handleSubmit(newProject)}>
                                <label htmlFor="titel">
                                    Een mooie titel*:
                                    <input
                                        type="title"
                                        id="title"
                                        placeholder="titel"
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
                                            id="field-yes"
                                            {...register("finished")}/>Ja
                                    </label>
                                </div>

                                <label htmlFor="startdate">
                                    Startdatum van het project*:
                                    <input
                                        type="text"
                                        id="startdate"
                                        placeholder="startdatum"
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
                                        placeholder="einddatum"
                                        className="form-textline"
                                        {...register("enddate")}/>
                                </label>

                                <p>Afmetingen:</p>
                                <div className="form-number-container">
                                    <label htmlFor="height">
                                        Hoogte:  <input
                                            type="number"
                                            id="height"
                                            placeholder="0"
                                            className="form-measurement"
                                            {...register("height" )}/> cm.
                                    </label>

                                    <label htmlFor="width">
                                        Breedte:  <input
                                            type="number"
                                            id="width"
                                            placeholder="0"
                                            className="form-measurement"
                                            {...register("width" )}/> cm.
                                    </label>
                                </div>

                                <label htmlFor="medium">
                                    Medium waarmee wordt gewerkt:
                                    <input
                                        type="text"
                                        id="medium"
                                        placeholder="medium"
                                        className="form-textline"
                                        {...register("medium" )}/>
                                </label>

                                <label htmlFor="subject">
                                    Onderwerp:
                                    <input
                                        type="subject"
                                        id="subject"
                                        placeholder="onderwerp"
                                        className="form-textline"
                                        {...register("subject" )}/>
                                </label>

                                <label htmlFor="inspiration">
                                    Geïnspireerd door:
                                    <input
                                        type="inspiration"
                                        id="inspiration"
                                        placeholder="inspiratie"
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
    )

}

export default NewProject;