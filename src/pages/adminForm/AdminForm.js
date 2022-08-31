import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {useHistory, useParams} from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import './../Form.css';

function AdminForm() {
    const [ thisUser, setThisUser ] = useState([]);
    const { username } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ newPassword, setNewPassword ] = useState('');
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();
    const history = useHistory();

    function handlePasswordChange(p) {
        const pw = p.target.value;
        setNewPassword(pw);
    }

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get(`http://localhost:8080/users/${username} `,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        });
                setThisUser(response.data);
                console.log(response.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchUser();
        setNewPassword(thisUser.password);
    }, []);

    async function submitDetails(d, e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const putUser = await axios.put(`http://localhost:8080/users/${username}`, {
                firstName: d.firstname,
                lastName: d.lastname,
                emailAddress: d.emailaddress,
                password: newPassword
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            const putRole = await axios.post(`http://localhost:8080/users/${username}/authorities`, {
                authority: d.role
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            const delRole = await axios.delete(`http://localhost:8080/users/${username}/authorities/${thisUser.authorities[0].authority}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            history.push('/admindashboard')
        } catch(e) {
            console.error('Er ging iets mis...', e);
            setError(true);
        }
        setLoading(false);
    }

    return(
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Gegevens wijzigen" id="navigation"/>
                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container form-page-container background-image">
                    <form className="form" onSubmit={handleSubmit(submitDetails)}>
                        <p>Rol:</p>
                        <div className="form-radio-container" >
                            <label htmlFor="field-user">
                                <input
                                    type="radio"
                                    name="role"
                                    value="ROLE_USER"
                                    id="field-no"
                                    {...register("role")}/>Gebruiker
                            </label>

                            <label htmlFor="field-admin">
                                <input
                                    type="radio"
                                    name="role"
                                    value="ROLE_ADMIN"
                                    id="field-yes"
                                    {...register("role")}/>Admin
                            </label>
                        </div>

                        <label htmlFor="firstname">
                            Voornaam:
                            <br/>
                            <input
                                type="text"
                                id="firstname"
                                defaultValue={thisUser.firstName}
                                {...register("firstname" )}/>
                        </label>
                        <br/>

                        <label htmlFor="lastname">
                            Achternaam:
                            <br/>
                            <input
                                type="text"
                                id="lastname"
                                defaultValue={thisUser.lastName}
                                {...register("lastname"  )}/>
                        </label>
                        <br/>

                        <label htmlFor="emailaddress">
                            Emailadres:
                            <br/>
                            <input
                                type="email"
                                id="emailaddress"
                                defaultValue={thisUser.emailAddress}
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

                        <label htmlFor="password">
                            Wachtwoord resetten
                            <br/>
                            <input
                                type="password"
                                id="password"
                                onChange={handlePasswordChange}
                                {...register("password", {
                                        minLength: {
                                            value: 8,
                                            message: "Kies een wachtwoord met minimaal 8 karakters."
                                        }
                                    }
                                )}/>
                        </label>
                        {errors.password && <p className="error-label" >{error.password.message}</p>}
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
                                onClick={() => history.push('/admindashboard')}
                            >
                                Annuleren
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );

}

export default AdminForm;