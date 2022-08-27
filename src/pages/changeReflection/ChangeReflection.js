import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Navigation from "../../components/navigation/Navigation";

function ChangeReflection() {
    const { reflection_id } = useParams()
    const location = useLocation()
    const { date } = location.state
    const { text } = location.state
    const [ reflection, setReflection ] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = localStorage.getItem('token');
    const history = useHistory();

    function handleMessageChange(e) {
        const typedText = e.target.value;
        console.log(typedText);
        setMessage(typedText);
    }

    useEffect(() => {
        fetch(`http://localhost:8080/user/project/reflection/${reflection_id}`).then(setReflection)
        setMessage(text);
    }, [reflection_id])

    async function newReflection(i, e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.put(`http://localhost:8080/reflections/${reflection_id}`, {
                dateMade: i.date,
                reflectionText: message,
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
                            <p>De wijzigingen opgeslagen.</p>
                        </section>
                        :
                        <section className="form-wrapper">
                            <p>Wijzig de datum of de reflectietekst.</p>
                            <form className="form" onSubmit={handleSubmit(newReflection)}>
                                <label htmlFor="date">
                                    Datum:
                                    <br/>
                                    <input
                                        type="text"
                                        id="date"
                                        defaultValue={date}
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

export default ChangeReflection;
