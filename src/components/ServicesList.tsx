import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ServicesList() {
    let [pic, setPic] = useState(1)
    return (
        <section data-aos='fade-up' className="section section--dark">
            <div className="container">
                <div className="section__wrapper">
                    <div data-aos='fade-up' className="section__left-side">
                        <img
                            className="section__tablet-slider"
                            onClick={() => setPic(pic < 3 ? pic + 1 : 1)}
                            src={`/images/tabletSlider${pic}.png`} alt="tablet-slider"
                        />
                    </div>
                    <div className="section__right-side">
                        <div data-aos='fade-up' className="section__item">
                            <h1 className="section__suptitle">Services - Dotted Agency</h1>
                        </div>
                        <ul data-aos='fade-up' className="service-list service-list--main">
                            <li className="service-list__item">Events</li>
                            <li className="service-list__item">PR</li>
                            <li className="service-list__item">Strategy</li>
                            <li className="service-list__item">Printed</li>
                            <li className="service-list__item">Audio</li>
                            <li className="service-list__item">Products Shooting</li>
                            <li className="service-list__item">Studio Photography</li>
                            <li className="service-list__item">SMS Campaigns</li>
                        </ul>
                        <div className="load-more">
                            <NavLink to='/services'>Load More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesList;