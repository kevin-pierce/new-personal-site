import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

// Tab Content
import AboutTab from '../about-tab/about-tab';
import ProjectsTab from '../projects-tab/projects-tab';

import './profile-content.scss'

const ProfileContent = () => {
    return (
        <div className="profile-content-wrapper mt-5">
        <Tabs
            fill
            justify
            defaultActiveKey="about"
            //transition={false}
            id="noanim-tab-example"
        >
            <Tab eventKey="about" title="About">
                <AboutTab/>
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <ProjectsTab/>
            </Tab>
            {/* <Tab eventKey="contact" title="Contact">
                tab3
            </Tab> */}
        </Tabs>
        </div>
    )
}

export default ProfileContent;