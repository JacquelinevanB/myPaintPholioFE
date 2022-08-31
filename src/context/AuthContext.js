import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [ isAuth, toggleIsAuth ] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT,);
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    async function fetchUserData(id, token) {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result.data);

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    password: result.data.password,
                    role: result.data.authorities[0].authority,
                    firstname: result.data.firstName,
                    lastname: result.data.lastName,
                    emailaddress: result.data.emailAddress
                },
                status: 'done',
            });

            if (result.data.authorities[0].authority === "ROLE_ADMIN") {
                history.push('/admindashboard');
            } else {
                history.push('/userdashboard');
            }
        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Een ogenblikje...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;