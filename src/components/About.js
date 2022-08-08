import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

function About() {
    const [isLogedIn, setIsLogedIn] = useState(localStorage.getItem("loginvalue"));
    console.log(isLogedIn);
    return (
        <div>
            This is about page
            {isLogedIn != null && <Navigate to="/login" />}
        </div>
    );
}

export default About;