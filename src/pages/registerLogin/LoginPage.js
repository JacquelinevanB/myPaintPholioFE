import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import Navigation from "../../components/navigation/Navigation";
import '../Form.css';
//CSS

function LoginPage() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [ error, toggleError ] = useState(false);
    const { login, logout, isAuth } = useContext(AuthContext);
    const source = axios.CancelToken.source();
    const history = useHistory();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function signIn(e) {
        toggleError(false);
        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: e.username,
                password: e.password,
            }, {
                cancelToken: source.token,
            });
            login(result.data.jwt);
            console.log('Inloggen is gelukt!');
        } catch(error) {
            console.error('Er ging iets mis...', error);
            toggleError(true);
        }
    }

    return(
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Inloggen" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    {!isAuth ?
                        <form className="form" onSubmit={handleSubmit(signIn)}>
                            <p><strong>Voer je gegevens in</strong></p>
                            <br/>
                            <label htmlFor="username-field">
                                Gebruikersnaam (hoofdlettergevoelig):
                                <br/>
                                <input
                                    type="text"
                                    id="username-field"
                                    {...register("username", {
                                        required: "Gebruikersnaam mag niet leeg zijn."
                                    })}
                                    placeholder="Gebruikersnaam"
                                    className="form-textline"
                                />
                            </label>
                            {error.username && <p className="error-label" >{error.username.message}</p>}
                            <br/>

                            <label htmlFor="password-field">
                                Wachtwoord:
                                <br/>
                                <input
                                    type="password"
                                    id="password-field"
                                    {...register("password", {
                                        required: "Wachtwoord mag niet leeg zijn."
                                    })}
                                    placeholder="Wachtwoord"
                                    className="form-textline"
                                />
                            </label>
                            {errors.password && <p className="error-label" >{errors.password.message}</p>}
                            <br/>
                            {error && <p className="error">Er gaat iets niet goed. Controleer je gegevens en probeer nog eens.</p>}
                            <div className="form-button-container">
                                <button
                                    type="submit"
                                    className="form-button"
                                >
                                    Inloggen
                                </button>
                                <button
                                    type="button"
                                    className="form-button"
                                    onClick={() => history.push('/')}
                                >
                                    Annuleren
                                </button>
                            </div>
                            <p>Heb je nog geen account? <Link to="/register"><strong>Registreer</strong></Link> je dan eerst.</p>
                        </form>
                        :
                        <section>
                            <p>Je bent al ingelogd.</p>
                            <button type="button" onClick={logout}>Log uit</button>
                        </section>
                    }
                </div>
            </main>

        </>
    );
}

export default LoginPage;