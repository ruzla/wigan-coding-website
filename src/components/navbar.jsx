import React from 'react';
import { Link } from 'react-router-dom';

import wcLogo from '../img/wclogogradient2small.png';

const NavBar = () => (
    <div className="navBar">
        <div className="textLogo">
            <Link className="title" to="/"><img className="nav-logo" src={wcLogo} alt="wclogo"/></Link>
        </div>    
        <ul className="nav">
          <Link className="item" to="/about-us">About Us</Link>
          <Link className="item" to="/contact-us">Contact Us</Link>
        </ul>
           
    </div>
);

export default NavBar;
