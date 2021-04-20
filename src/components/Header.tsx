import React from 'react';
import {
    useLocation,
    NavLink
} from "react-router-dom";

type activeType = {
    modalActive: boolean,
    subActive: boolean,
}

type setActiveType = {
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>,
    setSubActive: React.Dispatch<React.SetStateAction<boolean>>,
}

function Header({ active, setActive }: { active: activeType, setActive: setActiveType }) {

    let { modalActive, subActive } = active
    let { setModalActive, setSubActive } = setActive

    return (
        <header className={modalActive ? 'header active' : 'header'}>
            <div className={modalActive ? 'header__logo active' : 'header__logo'}>
                <a href="#">
                    <h1 className="logo">
                        <NavLink 
                        onClick={() => modalActive === true && setModalActive(false)} 
                        to='/'>dotted.</NavLink>
                    </h1>
                </a>
            </div>
            <div className="header__right">
                <button
                    className={modalActive ? 'button header__button' : 'button button--dark header__button'}
                    onClick={() => setSubActive(!subActive)}>Subscribe</button>

                {
                    (function HideContact() {
                        let location = useLocation()
                        if (location.pathname !== '/contact') {
                            return (
                            <NavLink to='/contact'>
                                <button
                                onClick={() => modalActive === true && setModalActive(false)} 
                                className={modalActive ?
                                    'button header__button' :
                                    'button button--dark header__button'}>Start a Project</button>
                            </NavLink>
                            )
                        }
                    })()
                }

                <div className="burger" onClick={() => setModalActive(!modalActive)}>
                    <span className={modalActive ? 'active' : ''}></span>
                    <span className={modalActive ? 'active' : ''}></span>
                    <span className={modalActive ? 'active' : ''}></span>
                </div>
            </div>
        </header>
    )
}

export default Header;