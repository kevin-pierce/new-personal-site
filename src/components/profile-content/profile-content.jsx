import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

// Tab Content
import AboutTab from '../about-tab/about-tab';

import './profile-content.scss'

const ProfileContent = () => {
    return (
        <div className="profile-content-wrapper">

        
        <Tabs
            fill
            justify
            defaultActiveKey="about"
            transition={false}
            id="noanim-tab-example"
        >
            <Tab eventKey="about" title="About">
                <AboutTab/>
            </Tab>
            <Tab eventKey="projects" title="Projects">
                tab2
            </Tab>
            <Tab eventKey="contact" title="Contact">
                tab3
            </Tab>
        </Tabs>
        </div>
    )
}

export default ProfileContent;