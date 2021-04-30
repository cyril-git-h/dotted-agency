import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ul className="footer__list footer__list--main">
                        <li className="footer__item"><NavLink to='/services'>Services</NavLink></li>
                        <li className="footer__item"><NavLink to='/about'>About</NavLink></li>
                        <li className="footer__item"><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item"><NavLink to='/terms'>Terms &amp; Conditions</NavLink></li>
                        <li className="footer__item"><NavLink to='/privacy'>Privacy Policy</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
