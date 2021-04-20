import React from 'react';

function Opinions() {
    return (
        <section data-aos='fade-up' className="section">
            <div className="container">
                <div className="opinions">
                    <h1 className="opinions__title">Clients opinion</h1>
                    <ul className="opinions-list">
                        <li className="opinions-list__item">
                            <h1 className="opinions-list__title">Creating together</h1>
                            <p className="opinions-list__text">The diversity of projects developed by dotted team speaks for itself. Dream team!</p>
                            <span className="opinions-list__author">Stefan Haas</span>
                        </li>
                        <li className="opinions-list__item">
                            <h1 className="opinions-list__title">Absolutely awesome</h1>
                            <p className="opinions-list__text">The dotted team came up with the great proposal. The result is vibrant, colorful and basically amazing.</p>
                            <span className="opinions-list__author">Olivia Tessa</span>
                        </li>
                        <li className="opinions-list__item">
                            <h1 className="opinions-list__title">Top quality</h1>
                            <p className="opinions-list__text">I count on the Dotted every time I want top-notch design and highest quality solutions.</p>
                            <span className="opinions-list__author">Roxana Violet</span>
                        </li>
                        <li className="opinions-list__item">
                            <h1 className="opinions-list__title">They are professional</h1>
                            <p className="opinions-list__text">The team is very passionate about their work. You can see it in every project.</p>
                            <span className="opinions-list__author">Sabrina Cohen</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Opinions;