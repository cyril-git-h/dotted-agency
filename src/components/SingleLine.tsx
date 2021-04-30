import React from 'react';
import { NavLink } from 'react-router-dom';

function SingleLine() {
    return (
        <section data-aos='fade-up' className="section">
            <div className="container">
                <div className="single-string">
                    <h1 className="section__title">Committed to quality?<br />Drop us a line</h1>
                    <NavLink to='/contact'><button className="button">let's talk</button></NavLink>
                </div>
            </div>
        </section>
    )
}

export default SingleLine;
