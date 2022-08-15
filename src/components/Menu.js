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

/*
--> Nav menu 

-->NavLink
   --> imported navLink form react-router-dom : It is help to navigate to page without
       reloading the page and it's addinal future that is to set styles to active nav Item.

-->Link: It is work functionality is same to the NavLink.
   --> It dont have to set styles to active Nav.
*/
