import React from "react";
import { useHistory } from "react-router-dom";
import ProfileUser from "../profile/profileUser/ProfileUser";
import ProfileProject from "../profile/profileProject/ProfileProject";
import './SideBar.css';

function SideBar({ pageId }) {
    const history = useHistory();

    return (
        <aside className="sidebar">
            {pageId === "project" ?
                <div>
                    <ProfileProject />
                </div>
                :
                <div>
                    <ProfileUser />
                    <button
                        type="button"
                        className="button-profile"
                        onClick={() => history.push('/changedetails')}
                    >
                        gegevens aanpassen
                    </button>
                </div>
            }
        </aside>
    );
}

export default SideBar;





