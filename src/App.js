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
import LoginPage from "./pages/registerLogin/LoginPage";
import RegisterPage from "./pages/registerLogin/RegisterPage";
import PrivateRoute from "./helpers/PrivateRoute";
import ChangeUserDetails from "./pages/changeUserDetails/ChangeUserDetails";
import ChangePassword from "./pages/changeUserDetails/ChangePassword";
import NewReflection from "./pages/newReflection/NewReflection";
import ChangeReflection from "./pages/changeReflection/ChangeReflection";
import ChangeProject from "./pages/changeProject/ChangeProject";
import AdminForm from "./pages/adminForm/AdminForm";
import AddQuote from "./pages/addQuote/AddQuote";


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
                <PrivateRoute path="/profileadmin/:username">
                    <AdminForm />
                </PrivateRoute>
                <PrivateRoute path="/newquote">
                    <AddQuote />
                </PrivateRoute>
                <PrivateRoute exact path="/userdashboard">
                    <UserDashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/user/project/:project_id">
                    <ProjectPage />
                </PrivateRoute>
                <PrivateRoute path="/user/project/reflection/:reflection_id">
                    <ReflectionPage />
                </PrivateRoute>
                <PrivateRoute path="/newreflection/:project_id">
                    <NewReflection />
                </PrivateRoute>
                <PrivateRoute path="/newproject">
                    <NewProject />
                </PrivateRoute>
                <PrivateRoute path={"/changedetails"}>
                    <ChangeUserDetails />
                </PrivateRoute>
                <PrivateRoute path={"/changepassword"}>
                    <ChangePassword />
                </PrivateRoute>
                <PrivateRoute path={"/changeproject/:project_id"}>
                    <ChangeProject />
                </PrivateRoute>
                <PrivateRoute path={"/changereflection/:reflection_id"}>
                    <ChangeReflection />
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
