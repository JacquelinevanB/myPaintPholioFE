import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";
import DashboardAdmin from "./pages/dashboard-admin/DashboardAdmin";
import DashboardUser from "./pages/dashboardUser/DashboardUser";
import ProjectPage from "./pages/projectPage/ProjectPage";
import ReflectionPage from "./pages/reflectionPage/ReflectionPage";
import Footer from "./components/footer/Footer";
import NewProject from "./pages/newProject/NewProject";
import FormPage from "./pages/formPage/FormPage";


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
                <Route exact path="/user/project/:project_id">
                    <ProjectPage />
                </Route>
                <Route path="/user/project/update">
                    <ReflectionPage />
                </Route>
                <Route path="/project/new">
                    <NewProject />
                </Route>
                <Route path="/form">
                    <FormPage />
                </Route>
            </Switch>
            <Footer id="footer"/>
        </>
    );
}

export default App;
