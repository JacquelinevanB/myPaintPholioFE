import React, {useEffect, useState} from 'react';
import Navigation from "../../components/navigation/Navigation";
import './AdminDashboard.css';
import axios from "axios";
import {Link, useHistory, useLocation, useParams} from "react-router-dom";

function AdminDashboard(props) {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [reflections, setReflections] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const source = axios.CancelToken.source();
    const history = useHistory();

    useEffect(() => {
        async function fetchAppInformation() {
            try {
                const [responseOne, responseTwo, responseThree, responseFour] = await Promise.all([
                    axios.get(`http://localhost:8080/users/all`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        }),
                    axios.get(`http://localhost:8080/projects/all`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        }),
                    axios.get(`http://localhost:8080/reflections/all`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        }),
                    axios.get(`http://localhost:8080/quotes/all`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            cancelToken: source.token,
                        })
                ])
                setUsers(responseOne.data);
                setProjects(responseTwo.data);
                setReflections(responseThree.data);
                setQuotes(responseFour.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchAppInformation();

    }, []);


    async function deleteUser(username) {
        try {
            await axios.delete(`http://localhost:8080/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            window.location.reload();
        } catch(e) {
            console.error('Er ging iets mis...', e);
        }
    }

    async function deleteQuote(id) {
        try {
            await axios.delete(`http://localhost:8080/quotes/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            window.location.reload();
        } catch(e) {
            console.error('Er ging iets mis...', e);
        }
    }

    function redirect(username) {
        history.push(`/profileadmin/${username}`)
    }

    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Admin pagina" id="navigation"/>

                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-admin-container">
                    <div className="dashboard-admin-numberscontainer">
                        <h4>Totaal aantal gebruikers: {users.length}</h4>
                        <h4>Totaal aantal projecten: {projects.length}</h4>
                        <h4>Totaal aantal reflecties: {reflections.length}</h4>
                    </div>

                    <h4>Alle gebruikers</h4>

                    <button
                        type="button"
                        className="button-clear"
                        onClick={() => history.push('/register')}
                    >
                        Gebruiker toevoegen
                    </button>

                    <table>
                        <thead>
                        <tr>
                            <th>Gebruikersnaam</th>
                            <th>Rechten</th>
                            <th>Voornaam</th>
                            <th>Achternaam</th>
                            <th>Emailadres</th>
                            <th>Wachtwoord</th>
                            <th className="tablecell-center">Aantal projecten</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => {
                            return <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>
                                    {user.authorities[0].authority && (user.authorities[0].authority === 'ROLE_ADMIN' ?
                                        <p>administrator</p> :
                                        <p>gebruiker</p>
                                    )}
                                </td>
                                <td>{user.firstName && user.firstName}</td>
                                <td>{user.lastName && user.lastName}</td>
                                <td>{user.emailAddress && user.emailAddress}</td>
                                <td>{user.password && "********"}</td>
                                <td className="tablecell-center" >
                                    {(projects.filter((project) => {return project.personDto.username === user.username})).length}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="button-clear"
                                        onClick={() => redirect(user.username)}
                                    >
                                        bewerken
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="button-clear"
                                        onClick={() => deleteUser(user.username)}
                                    >
                                        verwijderen
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    <h4>Alle quotes</h4>
                    <button
                        type="button"
                        className="button-clear"
                        onClick={() => history.push('/newquote')}
                    >
                        Quote toevoegen
                    </button>
                    <table>
                        <thead>
                        <tr>
                            <th>Source</th>
                            <th>Quote</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {quotes.map((quote) => {
                            return <tr key={quote.id}>
                                <td>{quote.source}</td>
                                <td>{quote.text}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="button-clear"
                                        onClick={() => deleteQuote(quote.id)}
                                    >
                                        verwijderen
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default AdminDashboard;