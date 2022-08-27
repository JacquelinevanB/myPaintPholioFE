import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";

function ChangePassword() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {user} = useContext(AuthContext);
    const [ success, toggleSuccess ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const token = localStorage.getItem('token');
    const history = useHistory();

    async function submitNewPassword(p) {
        setError(false);
        toggleSuccess(false);
        setLoading(true);
        try {
            await axios.put(`http://localhost:8080/users/${user.username}`, {
                password: p.password,
                firstName: user.firstname,
                lastName: user.lastname,
                emailAddress: user.emailaddress
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            toggleSuccess(true);
            setTimeout(() => {
                history.push('/userdashboard');
            }, 2000);
        } catch(e) {
            console.error('Er ging iets mis...', e);
            setError(true);
        }
        setLoading(false);
    }

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Wachtwoord wijzigen" id="navigation"/>
                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    { success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>Jouw wachtwoord is succesvol gewijzigd.</p>
                            <p>Je wordt zo doorgestuurd naar jouw dashboard.</p>
                            <p>Mocht dit om een of andere reden niet automatisch gebeuren, klik dan <Link
                                to="/userdashboard"><strong>hier</strong></Link>.</p>
                        </section>
                        :
                        <>
                            <form onSubmit={handleSubmit(submitNewPassword)} className="form">
                                <p><strong>Wijzig hier je wachtwoord.</strong></p>
                                <label htmlFor="password">
                                    Kies een veilig wachtwoord van minimaal 8 karakters:
                                    <br/>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-textline"
                                        placeholder="Wachtwoord"
                                        {...register("password", {
                                            required: "Dit is een verplicht veld.",
                                            minLength: {
                                                value: 8,
                                                message: "Kies een wachtwoord met minimaal 8 karakters."
                                            }
                                        })}
                                    />
                                </label>
                                {errors.password && <p className="error-label" >{error.password.message}</p>}
                                <br/>

                                <div className="form-button-container">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                    >
                                        Verzenden
                                    </button>
                                    <button
                                        type="button"
                                        onClick={history.goBack}
                                    >
                                        Annuleren
                                    </button>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </main>
        </>
    )
}

export default ChangePassword;