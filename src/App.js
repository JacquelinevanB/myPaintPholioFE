import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";
import DashboardAdmin from "./pages/dashboard-admin/DashboardAdmin";
import DashboardUser from "./pages/dashboardUser/DashboardUser";
import OneProjectPage from "./pages/projectPage/OneProjectPage";
import AllProjectsPage from "./pages/projectsAll/AllProjectsPage";
import ProjectUpdatePage from "./pages/projectUpdatepage/ProjectUpdatePage";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard_admin">
                            Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/project">
                            Project pagina
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/all_projects">
                            Projecten overzicht
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/project/update">
                            Projectupdate pagina
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/dashboard_admin">
                    <DashboardAdmin />
                </Route>
                <Route exact path="/user">
                    <DashboardUser />
                </Route>
                <Route exact path="/user/project">
                    <OneProjectPage />
                </Route>
                <Route path="/user/all_projects">
                    <AllProjectsPage />
                </Route>
                <Route path="/user/project/update">
                    <ProjectUpdatePage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
