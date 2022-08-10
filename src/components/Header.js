import React, { useState } from 'react';
import Menu from './Menu';
import { useNavigate } from "react-router-dom";



function Header() {
    const [isLogedIn, setIsLogedIn] = useState(sessionStorage.getItem("loginvalue"));
    const navigate = useNavigate();
    function logout() {
        sessionStorage.removeItem("loginvalue");
        navigate("/login");
    }

    return (

        <div className="displayFlex_spacebetween">
            <div className="displayFlex_center gap_10">
                <div className="logo">
                    <i className="fa-solid fa-seedling"></i>
                </div>
                <div className="title">
                    ASNR
                </div>
            </div>

            <div className="displayFlex_center gap_20">
                <div>
                    <Menu />
                </div>
                <button className="logot" onClick={logout}>Logot</button>
            </div>
        </div>
    );
}

export default Header;