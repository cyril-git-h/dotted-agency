import React from 'react';
import {
    NavLink
} from "react-router-dom";

function ModalInner(
    { active, setActive }:
    { active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }
) {
    return (
        <div className="menu">
            <div className="menu__inner">
                <ul className="menu__list menu__list--main">
                    <li className="footer__item">
                        <NavLink onClick={() => setActive(!active)} to='/about'>About</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink onClick={() => setActive(!active)} to='/services'>Services</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink onClick={() => setActive(!active)} to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <ul className="menu__list">
                    <li className="footer__item">
                        <NavLink onClick={() => setActive(!active)} to='/terms'>Terms &amp; Conditions</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink onClick={() => setActive(!active)} to='/privacy'>Privacy Policy</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalInner;
