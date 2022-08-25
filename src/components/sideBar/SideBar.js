import React from "react";
import './SideBar.css';
import ProfileUser from "../profile/profileUser/ProfileUser";

function SideBar() {

    return (
        <aside className="sidebar">
            <ProfileUser />
            <button
                type="button"
                className="button-profile">
                gegevens aanpassen
            </button>
        </aside>
    );
}

export default SideBar





