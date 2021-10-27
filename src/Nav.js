import React from "react";
import './App.css';
import { Link } from "react-router-dom";
function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
    <nav>
        <ul className = "nav-Links">
                       <Link style={navStyle}  to="/shop">
            <li>Recipe</li>
            </Link>
        </ul>  
    </nav>
  );
}

export default Nav;
