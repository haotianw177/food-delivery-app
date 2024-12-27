import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js';

export const Navbar = () => {

// menu is the state variable, 
// it stores the current value of the menu selection,
// setMenu updates the menu state when a menu item is clicked.
// The state dynamically controls which <li> has the "active" class,
//  allowing you to style the currently selected menu item.
  const[menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'/>
        <ul className='navbar-menu'>
            {/* Checks if the current menu state is "home". 
            If menu === "home", <li> gets the className="active". 
            If menu !== "home", it gets an empty className="". 
            This allows you to style the "home" item differently */}
            <li onClick = {() => setMenu("home")} className={menu==="home"? "active":''}>home</li>
            <li onClick = {() => setMenu("menu")} className={menu==="menu"? "active":''}>menu</li>
            <li onClick = {() => setMenu("mobile-app")} className={menu==="mobile-app"? "active":''}>mobile-app</li>
            <li onClick = {() => setMenu("contact-us")} className={menu==="contact-us"? "active":''}>contact us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon}/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon}/>
                {/* dot is for the dot on cart(basket) icon */}
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    
    </div>
  );
};

export default Navbar;