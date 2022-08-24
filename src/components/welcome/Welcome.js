import React, { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

function Welcome() {

    const {user: {username}} = useContext(AuthContext);

    return (
        <>
            <section className="welcome">
                <div>
                    <h2>Welkom</h2>
                    <h2>{username}!</h2>
                </div>
            </section>
        </>
    )
}

export default Welcome;