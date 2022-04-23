import React from 'react';

import './about-tab.scss'

const AboutTab = () => {
    return (
        <div className="about-tab-wrapper">
            <h2>Oh, hey there!</h2>
            <div>
                I'm a 2B Software Engineering student at the University of Waterloo, with an <br/>
                    interest in full stack development. 
                    <br/><br/>
                    Previously, I've worked at <a href="https://www.wish.com/">Wish</a> as a Software Engineering Intern on the Marketplace Orders Team. 
                    <br/>
                    I've also worked as a Software Engineering Intern at <a href="https://triyosoft.com/">TRIYOSoft</a>. 
                    <br/><br/>
                    Outside of work, I enjoy working out, drawing, and collecting sneakers.
                    <br/><br/><br/>
                {
                    <h3>🔎🕵️ Currently, I'm on the hunt for internship opportunities for Fall 2022<br/>If interested, feel free to contact me <a href="https://www.linkedin.com/in/kwpierce/">here</a>.</h3>
                }
            </div>
        </div>
    )
}

export default AboutTab;