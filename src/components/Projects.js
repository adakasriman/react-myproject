import React, { useState } from 'react';
import { Navigate } from "react-router-dom";


function Projects() {
    const [isLogedIn, setIsLogedIn] = useState(sessionStorage.getItem("loginvalue"));
    return (
        <div> This is Projects page
            {isLogedIn === null  && <Navigate to={'/login'} />}
        </div>
    );
}

export default Projects;