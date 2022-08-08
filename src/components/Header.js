import React from 'react'
import Menu from './Menu';


function Header() {
    
    return (
        <div className="displayFlex_spacebetween">
            <div className="displayFlex_center gap_10">
                <div className="logo">
                    <i class="fa-solid fa-seedling"></i>
                </div>
                <div className="title">
                    ASNR
                </div>
            </div>

            <div className="displayFlex_center gap_20">
                <div>
                    <Menu />
                </div>
                <button className="logot">Logot</button>
            </div>
        </div>
    );
}

export default Header;