import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import { LogoImage, LoginImage } from "./style.jsx";
import newstory from "../../components/header/newstory.png";
import SignupForm from "../../components/signupForm/signupForm.jsx";
import LoginForm from "../../components/LoginForm/loginForm.jsx";
import loginImage from "./loginImage.jpg"

function Body() {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState("signup"); // State to track active form

    const gotoMain = () => {
        navigate('/');
    }

    const onClickLogo = () => {
        navigate('/');
    }
    // Toggle between login and signup forms
    const toggleForm = () => {
        setActiveForm(activeForm === "login" ? "signup" : "login");
    }

    return (
        <>
            <LogoImage src={newstory} onClick={onClickLogo}/>
            <LoginImage src={loginImage} />
            <LoginForm/>
        </>
    )
}

export default Body;
