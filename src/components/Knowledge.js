import React,{useState} from 'react';
import { Navigate } from "react-router-dom";
function Knowledge() {
    const [isLogedIn, setIsLogedIn] = useState(sessionStorage.getItem("loginvalue"));

    return (
        <div>
            <p>This is Knowledge page</p>
            {isLogedIn === null  && <Navigate to={'/login'} />}
        </div>
    );
}

export default Knowledge;