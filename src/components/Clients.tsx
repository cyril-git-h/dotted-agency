import React from 'react';

function Intro() {
    return (
        <section data-aos='fade-up' className="section section--dark">
            <div className="container">
                <div data-aos='fade-up' className="section__item">
                    <h1 className="section__suptitle">We are proud to work with</h1>
                    <h1 className="section__title">Our Clients</h1>
                    <p className="section__text">Clients with projects proudly crafted by Quart.</p>
                </div>
                <ul data-aos='fade-up' className="brands-list">
                    <li className="brands-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://myconcierge.ro/">
                            <img src="/images/brand.png" alt="tablet-slider" />
                        </a>
                    </li>
                    <li className="brands-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.astravel.ro/">
                            <img src="/images/astravel.png" alt="tablet-slider" />
                        </a>
                    </li>
                    <li className="brands-list__item">
                        <a href="javascript:void(0)">
                            <img src="/images/caddo.png" alt="tablet-slider" />
                        </a>
                    </li>
                    <li className="brands-list__item">
                        <a href="javascript:void(0)">
                            <img src="/images/melt.png" alt="tablet-slider" />
                        </a>
                    </li>
                    <li className="brands-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://pizzapph.ro/">
                            <img src="/images/pizza.png" alt="tablet-slider" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Intro;