import React from 'react';
import { Card } from 'react-bootstrap';

import './projects-tab.scss'

const ProjectsTab = () => {
    return (
        <div className="projects-tab-wrapper">
            <h2>Stuff I've worked on</h2>
            <div className="projects-wrapper">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card id="pathcha">
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        Pathcha
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>Pathcha</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        A data-aggregation and educational Pathology tool that pushes for the digitization of the field.<br/>
                                        Based upon the principal of image-based education and applied learning, Pathcha strives to revolutionalize how we learn and teach Pathology.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                        <Card id="hype-4-less">
                            <Card.Body className="card-body">
                                <Card.Text>
                                    Hype4Less
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>Hype4Less</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        The Trivago of shoes. Powered by a Selenium-based webscraper, Hype4Less connects Sneakerheads to the best deals on their favourite footwear products.
                                        Currently scrapes Nike, Adidas, Footlocker, and The Running Room (Canada only).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                        <Card id="my-board">
                            <Card.Body className="card-body">
                                <Card.Text>
                                    myBoard.space
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>myBoard.space</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                    An online whiteboard tool used to faciliate online education without the issue of low bandwidth. 
                                    The teacher of a session will have a paint-like interface where they can draw on the whiteboard to present their lesson. Viewers of the session will be able to join and watch the session live.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                        <Card id="covid-bot">
                            <Card.Body className="card-body">
                                <Card.Text>
                                    COVID-Bot
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>COVID-Bot</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        A Discord bot that provides real-time, daily-updated data regarding COVID-19-related cases, deaths, and recoveries. 
                                        Data is retrieved from John Hopkins University (Updated every 10 minutes) and accessed through the NovelCOVID API.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                            <Card id="foodprint">
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        Foodprint Web
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>Foodprint (Web)</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        A data-aggregation and educational Pathology tool that pushes for the digitization of the field.<br/>
                                        Based upon the principal of image-based education and applied learning, Pathcha strives to revolutionalize how we learn and teach Pathology.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                            <Card id="simpad">
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        simpad
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>simpad</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        A terminal-based text editor written in C. Simpad <strong>(Simple Notepad)</strong> is extremely lightweight, and consists of all major functionality one would need in a simple text editor. 
                                        Currently supports basic save, quit, and text search functionality, as well as highlighting for C keywords.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                            <Card id="uweacc">
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        UWEACC
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>UWEACC</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        A <strong>for-fun</strong> tool used to approximate one's chances of admission into Waterloo Engineering.
                                        Utilizing data from unofficial Waterloo's Highschool Adjustment Factor list, it calculates your chance of admission incorporating
                                        all factors of the admission process. ICS4U final project.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                            <Card id="labyrinth">
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        The Labyrinth
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>The Labyrinth</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        An original 2D horror-maze game written in Python using the <strong>Pygame</strong> library. Based on the mythological maze of the same name,
                                        players must collect all pieces of armour and slay the NPC Minotaur (equipped with path-finding AI) before it catches you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProjectsTab;