import React from 'react';
import Logo from './Logo';
import '../styles/Header.css';

const Header = (props) => {
    return(
        <header>
            <nav>
                <ul className = "container">
                    <li className = "logo-container"><a href="#"><Logo /></a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;