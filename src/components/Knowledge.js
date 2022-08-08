import React from 'react';
import { Navigate } from "react-router-dom";
function Knowledge() {
    const isLogined = localStorage.getItem('loginvalue');
    return (
        <div>
            <p>wertyuioiuytrewertyuio</p>
            {isLogined !== null  && <Navigate to={'/login'} />}
        </div>
    );
}

export default Knowledge;