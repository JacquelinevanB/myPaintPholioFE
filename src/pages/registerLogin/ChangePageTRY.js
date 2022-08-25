import React, {useContext, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import {AuthContext} from "../../context/AuthContext";

function ChangePage() {
    const { user: {username, firstname, lastname, emailaddress } } = useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();

    async function newDetails(e) {
        toggleSuccess(false);
        toggleError(false);
        toggleLoading(true);
        try {
            await axios.put(`http://localhost:8080/users/${username}`, {
                firstName: e.firstname,
                lastName: e.lastname,
                emailAddress: e.emailaddress,
                password: e.password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                cancelToken: source.token,
            });
            toggleSuccess(true);
        } catch (error) {
            console.error('Er ging iets mis...', error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Gegevens aanpassen" id="navigation"/>
                </div>
            </header>
            <main id="main" className="outer-content-container">
                <div className="inner-content-container login-register-container background-image">
                    {success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>Je gegevens zijn opgeslagen.</p>
                            <p>Je wordt zo doorgestuurd naar jouw dashboard.</p>
                            <p>Mocht dit om een of andere reden niet automatisch gebeuren, klik dan <Link
                                to="/dashboard"><strong>hier</strong></Link>.</p>
                        </section>
                        :
                        <section>
                            <p>Voer hieronder de nieuwe gegevens in.</p>
                            <form className="login-register-form register-form" onSubmit={handleSubmit(newDetails)}>
                                <label htmlFor="firstname">
                                    Jouw voornaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="firstname"
                                        {...register("firstname")}
                                        placeholder={firstname}
                                    />
                                </label>
                                <br/>

                                <label htmlFor="lastname">
                                    Jouw achternaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="lastname"
                                        {...register("lastname")}
                                        placeholder={lastname}
                                    />
                                </label>
                                <br/>

                                <label htmlFor="emailaddress">
                                    Jouw emailadres:
                                    <br/>
                                    <input
                                        type="email"
                                        id="emailaddress"
                                        {...register("emailaddress", {
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Geen geldig e-mailadres ingevoerd"
                                                }
                                            }
                                        )}
                                        placeholder={emailaddress}
                                    />
                                </label>
                                {errors.emailaddress && <p>{error.emailaddress.message}</p>}
                                <br/>

                                <label htmlFor="password">
                                    Kies een veilig wachtwoord van minimaal 8 karakters:
                                    <br/>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register("password", {
                                                minLength: {
                                                    value: 8,
                                                    message: "Kies een wachtwoord met minimaal 8 karakters.",
                                                }
                                            }
                                        )}
                                        placeholder="Wachtwoord"
                                    />
                                </label>
                                {errors.password && <p>{error.password.message}</p>}
                                <br/>

                                {error && <p className="error">Er ging helaas iets mis...</p>}
                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={loading}
                                >
                                    Wijzigen
                                </button>
                            </form>
                        </section>
                    }
                </div>
            </main>
        </>
    )
}

export default ChangePage;