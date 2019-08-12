import React from 'react';
import { Link } from 'react-router-dom';

import wclogo from '../img/wclogogradient2.png';

const NavBar = () => (
    <div className="navBar">
        <div className="textLogo">
            <Link className="title" to="/"><img src={wclogo} alt="wclogo"/></Link>
              <ul className="nav">
                <Link className="item" to="/about-us">About Us</Link>
                <Link className="item" to="/contact-us">Contact Us</Link>
              </ul>
        </div>    
    </div>
);

export default NavBar;
