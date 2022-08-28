import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import '../Form.css';

function Register() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const source = axios.CancelToken.source();
    const history = useHistory();

    async function newUser(u) {
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/users/register', {
                firstName: u.firstname,
                lastName: u.lastname,
                emailAddress: u.emailaddress,
                username: u.username,
                password: u.password,
                enabled: true,
            }, {
                cancelToken: source.token,
            });
            toggleSuccess(true);
            setTimeout(() => {
                history.push('/login');
            }, 5000);
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
                    <Navigation pageName="Registreren" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    {success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>Welkom! Fijn dat je gebruik gaat maken van My PaintPholio.</p>
                            <p>Je bent succesvol geregistreerd en wordt zo doorgestuurd naar de login pagina.</p>
                            <p>Mocht dit om een of andere reden niet automatisch gebeuren, klik dan <Link
                                to="/login"><strong>hier</strong></Link> om in te loggen.</p>
                        </section>
                        :
                        <section className="form-wrapper">
                            <p>Voer hieronder je gegevens in.</p>
                            <p>Na een succesvolle registratie wordt je automatisch doorgestuurd naar de inlogpagina.</p>
                            <form className="form form-post" onSubmit={handleSubmit(newUser)}>
                                <label htmlFor="firstname">
                                    Jouw voornaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="Voornaam"
                                        className="form-textline"
                                        {...register("firstname", {
                                                required: "Dit is een verplicht veld.",
                                            }
                                        )}/>
                                </label>
                                {errors.firstname && <p className="error-label" >{error.firstname.message}</p>}
                                <br/>

                                <label htmlFor="lastname">
                                    Jouw achternaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="lastname"
                                        placeholder="Achternaam"
                                        className="form-textline"
                                        {...register("lastname", {
                                                required: "Dit is een verplicht veld.",
                                            }
                                        )}/>
                                </label>
                                {errors.lastname && <p className="error-label" >{error.lastname.message}</p>}
                                <br/>

                                <label htmlFor="emailaddress">
                                    Jouw emailadres:
                                    <br/>
                                    <input
                                        type="email"
                                        id="emailaddress"
                                        placeholder="Emailadres"
                                        className="form-textline"
                                        {...register("emailaddress", {
                                                required: "Dit is een verplicht veld.",
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Geen geldig e-mailadres ingevoerd"
                                                }
                                            }
                                        )}/>
                                </label>
                                {errors.emailaddress && <p className="error-label" >{error.emailaddress.message}</p>}
                                <br/>

                                <label htmlFor="username">
                                    Kies een unieke gebruikersnaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Gebruikersnaam"
                                        className="form-textline"
                                        {...register("username", {
                                                required: "Dit is een verplicht veld.",
                                                minLength: {
                                                    value: 3,
                                                    message: "Kies een gebruikersnaam met minimaal 3 karakters."
                                                }
                                            }
                                        )}/>
                                </label>
                                {errors.username && <p className="error-label" >{error.username.message}</p>}
                                <br/>

                                <label htmlFor="password">
                                    Kies een veilig wachtwoord van minimaal 8 karakters:
                                    <br/>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Wachtwoord"
                                        className="form-textline"
                                        {...register("password", {
                                                required: "Dit is een verplicht veld.",
                                                minLength: {
                                                    value: 8,
                                                    message: "Kies een wachtwoord met minimaal 8 karakters."
                                                }
                                            }
                                        )}/>
                                </label>
                                {errors.password && <p className="error-label" >{error.password.message}</p>}
                                <br/>

                                {error && <p className="error">Deze gebruikersnaam bestaat al, probeer een andere.</p>}
                                <div className="form-button-container">
                                    <button
                                        type="submit"
                                        className="form-button"
                                        disabled={loading}
                                    >
                                        Registreren
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
                            <p>Heb je al een account, maar ben je toch per ongeluk op deze pagina? Je kunt <Link to="/login"><strong>hier</strong></Link> inloggen.</p>
                        </section>
                    }
                </div>
            </main>
        </>
    )
}

export default Register;