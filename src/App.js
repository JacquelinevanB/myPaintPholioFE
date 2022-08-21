import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";
import DashboardAdmin from "./pages/dashboard-admin/DashboardAdmin";
import DashboardUser from "./pages/dashboardUser/DashboardUser";
import OneProjectPage from "./pages/projectPage/OneProjectPage";
import AllProjectsPage from "./pages/projectsAll/AllProjectsPage";
import ProjectUpdatePage from "./pages/projectUpdatepage/ProjectUpdatePage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";


function App() {
    return (
        <>
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
            <Footer id="footer"/>
        </>
    );
}

export default App;
