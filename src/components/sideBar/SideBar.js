import React from "react";
import './SideBar.css';
import ProfileUser from "../profile/profileUser/ProfileUser";
import {useHistory} from "react-router-dom";

function SideBar() {
    const history = useHistory();

    return (
        <aside className="sidebar">
            <ProfileUser />
            <button
                type="button"
                className="button-profile"
                onClick={() => history.push('/changedetails')}
            >
                gegevens aanpassen
            </button>
        </aside>
    );
}

export default SideBar





