import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';

//CSS

function LoginPage() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [ error, toggleError ] = useState(false);
    const { login, logout, isAuth } = useContext(AuthContext);
    const source = axios.CancelToken.source();

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
            {!isAuth ?
                <form onSubmit={handleSubmit(signIn)}>
                    <h2>Inloggen</h2>
                    <p>Voer je gegevens in</p>
                    <label htmlFor="username-field">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
                            {...register("username", {
                                required: "Gebruikersnaam mag niet leeg zijn."
                            })}
                            placeholder="Gebruikersnaam"
                        />
                    </label>
                    {error.username && <p>{error.username.message}</p>}
                    <br/>

                    <label htmlFor="password-field">
                        Wachtwoord:
                        <input
                            type="password"
                            id="password-field"
                            {...register("password", {
                                required: "Wachtwoord mag niet leeg zijn."
                            })}
                            placeholder="Wachtwoord"
                        />
                    </label>
                    {errors.password && <p>{errors.password.message}</p>}
                    <br/>
                    {error && <p className="error">Er gaat iets niet goed. Controleer je gegevens en probeer nog eens.</p>}
                    <button type="submit">Inloggen</button>
                    <p>Heb je nog geen account? <Link to="/register"><strong>Registreer</strong></Link> je dan eerst.</p>
                </form>
                :
                <section>
                    <p>Je bent al ingelogd.</p>
                    <button type="button" onClick={logout}>Log uit</button>
                </section>
            }
        </>
    );
}

export default LoginPage;