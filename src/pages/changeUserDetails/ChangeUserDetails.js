import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import './../Form.css';

function ChangeUserDetails() {
    const [ success, toggleSuccess ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const history = useHistory();

    async function submitNewDetails(d) {
        setError(false);
        toggleSuccess(false);
        setLoading(true);
        try {
            await axios.put(`http://localhost:8080/users/${user.username}`, {
                    firstName: d.firstname,
                    lastName: d.lastname,
                    emailAddress: d.emailaddress,
                    password: user.password,
                    username: user.username
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
                    <Navigation pageName="Gegevens wijzigen" id="navigation"/>
                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    {success ?
                        <section>
                            <h3>Gelukt!</h3>
                            <p>Jouw gegevens zijn succesvol gewijzigd.</p>
                            <p>Je wordt zo doorgestuurd naar jouw dashboard.</p>
                            <p>Mocht dit om een of andere reden niet automatisch gebeuren, klik dan <Link
                                to="/userdashboard"><strong>hier</strong></Link>.</p>
                        </section>
                        :
                        <>
                            <form className="form" onSubmit={handleSubmit(submitNewDetails)}>
                                <p><strong>Wijzig hier jouw gegevens en verzend ze.</strong></p>
                                <label htmlFor="firstname">
                                    Jouw voornaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="firstname"
                                        className="form-textline"
                                        defaultValue={user.firstname}
                                        {...register("firstname" )}/>
                                </label>
                                {errors.firstname && <p className="error-label" >{error.firstname.message}</p>}
                                <br/>

                                <label htmlFor="lastname">
                                    Jouw achternaam:
                                    <br/>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="form-textline"
                                        defaultValue={user.lastname}
                                        {...register("lastname"  )}/>
                                </label>
                                {errors.lastname && <p className="error-label" >{error.lastname.message}</p>}
                                <br/>

                                <label htmlFor="emailaddress">
                                    Jouw emailadres:
                                    <br/>
                                    <input
                                        type="email"
                                        id="emailaddress"
                                        className="form-textline"
                                        defaultValue={user.emailaddress}
                                        {...register("emailaddress", {
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Geen geldig e-mailadres ingevoerd"
                                                }
                                            }
                                        )}/>
                                </label>
                                {errors.emailaddress && <p className="error-label" >{error.emailaddress.message}</p>}
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
                                        onClick={() => history.goBack}
                                    >
                                        Annuleren
                                    </button>
                                </div>
                            </form>
                            <p>Wil je jouw wachtwoord wijzigen, klik dan <Link to="/changepassword"><strong>hier</strong></Link>.</p>
                            <p>Wil je jouw profielfoto wijzigen, klik dan op je huidige profielfoto.</p>
                        </>
                    }
                </div>
            </main>
        </>
    );
}

export default ChangeUserDetails;
