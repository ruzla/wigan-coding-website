import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div className="navBar">
        <div className="textLogo">
            <div className="title">Wigan Coders</div>
              <ul className="nav">
                <Link className="item" to="/about-us">About Us</Link>
                <Link className="item" to="/contact-us">Contact Us</Link>
              </ul>
        </div>    
    </div>
);

export default NavBar;
