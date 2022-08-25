import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import ProjectPage from "./pages/projectPage/ProjectPage";
import ReflectionPage from "./pages/reflectionPage/ReflectionPage";
import Footer from "./components/footer/Footer";
import NewProject from "./pages/newProject/NewProject";
import FormPage from "./pages/formPage/FormPage";
import LoginPage from "./pages/registerLogin/LoginPage";
import RegisterPage from "./pages/registerLogin/RegisterPage";
import PrivateRoute from "./helpers/PrivateRoute";
import ChangeDetails from "./pages/changeDetails/ChangeDetails";


function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <PrivateRoute path="/admindashboard">
                    <AdminDashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/userdashboard">
                    <UserDashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/user/project/:project_id">
                    <ProjectPage />
                </PrivateRoute>
                <PrivateRoute path="/user/project/update">
                    <ReflectionPage />
                </PrivateRoute>
                <PrivateRoute path="/project/new">
                    <NewProject />
                </PrivateRoute>
                <PrivateRoute path="/form">
                    <FormPage />
                </PrivateRoute>
                <PrivateRoute path={"/changedetails"}>
                    <ChangeDetails />
                </PrivateRoute>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
            </Switch>
            <Footer id="footer"/>
        </>
    );
}

export default App;
