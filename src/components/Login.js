import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import App from '../App';

function Login() {
    const { register, handleSubmit } = useForm();
    const [isLogedIn, setIsLogedIn] = useState(localStorage.getItem("loginvalue"));
    console.log(isLogedIn);


    const onSubmit = data => {
        if (data.username === "sriman" && data.password === "Siva@1234") {
            localStorage.setItem("loginvalue", JSON.stringify(1));
            setIsLogedIn(0);
        }else {
            alert("Wrong: username / password");
        }
    console.log(isLogedIn);
    };
    console.log(isLogedIn);


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
            {isLogedIn === null  &&  <Navigate to={'/home'} />}
        </div>
    );
}

export default Login;