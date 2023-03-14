import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
    <nav className="navBar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink exact to="/chakras">Chakras</NavLink>
    </nav>
    )
}

export default NavBar;