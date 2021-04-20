import React from 'react';

function Intro(
    { title, snippetLeft, snippetRight, image }:
    { title: string, snippetLeft: string, snippetRight: string, image: string }
    ) {
    return (
        <section className="intro" style={{ backgroundImage: `url("/images/header${image}.jpg")` }}>
            <div className="container">
                <div className="intro__title">{title}</div>
                <div className="intro__subtitle">
                    <div className="intro__subtitle-snippet">{snippetLeft}</div>
                    <div className="intro__subtitle-snippet">{snippetRight}</div>
                </div>
            </div>
        </section>
    )
}

export default Intro;