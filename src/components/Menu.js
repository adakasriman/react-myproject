import React from 'react';
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <nav className="menu">
                <ul className="displayFlex_center gap_20">
                    <li>
                        <NavLink className="nav_link" to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to={'/projects'}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to={'/concepts'}>Concepts</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to={'/knowledge'}>Knowledge</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Menu;