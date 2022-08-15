import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import App from '../App';

function Login() {
    const { register, handleSubmit } = useForm();
    const [isLogedIn, setIsLogedIn] = useState(sessionStorage.getItem("loginvalue"));

    const onSubmit = data => {
        if (data.username === "sriman" && data.password === "Siva@1234") {
            sessionStorage.setItem("loginvalue", 1);
            setIsLogedIn(1);
        } else {
            alert("Wrong: username / password");
        }
    };


    return (
        <div className="login_page">
            <h2>ASNR</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="displayFlex_column login_form">
                <label>User Name</label>
                <input type="text" {...register("username")} />

                <label>Password</label>
                <input type="text" {...register("password")} />
                <div className='displayFlex_center'>
                    <button type="submit">Login</button>
                </div>
            </form>
            {isLogedIn !== null && <Navigate to={'/home'} />}
        </div>
    );
}

export default Login;

/*
 -->Here getting the credentical's and checking the credenticals is correct or not.

 -->If credentical's is valid, return to home page.

*/