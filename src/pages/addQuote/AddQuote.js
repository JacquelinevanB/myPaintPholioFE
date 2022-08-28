import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import '../Form.css';

function AddQuote() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const source = axios.CancelToken.source();
    const history = useHistory();
    const token = localStorage.getItem('token');

    async function newQuote(q) {
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/quotes/add_quote', {
                source: q.source,
                text: q.text
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            history.push('/admindashboard')
        } catch (error) {
            console.error('Er ging iets mis tijdens de registratie.', error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Nieuwe quote" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    <section className="form-wrapper">
                        <form className="form form-post" onSubmit={handleSubmit(newQuote)}>
                            <label htmlFor="text">
                                Quote:
                                <br/>
                                <input
                                    type="text"
                                    id="text"
                                    className="form-textline"
                                    {...register("text", {
                                            required: "Dit is een verplicht veld.",
                                        }
                                    )}/>
                            </label>
                            {errors.text && <p className="error-label">{error.text.message}</p>}
                            <br/>

                            <label htmlFor="source">
                                Bron:
                                <br/>
                                <input
                                    type="source"
                                    id="source"
                                    className="form-textline"
                                    {...register("source", {
                                            required: "Dit is een verplicht veld.",
                                        }
                                    )}/>
                            </label>
                            {errors.source && <p className="error-label">{error.source.message}</p>}
                            <br/>

                            <div className="form-button-container">
                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={loading}
                                >
                                    Bewaren
                                </button>
                                <button
                                    type="button"
                                    className="form-button"
                                    onClick={() => history.push('/')}
                                >
                                    Annuleren
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}

export default AddQuote;