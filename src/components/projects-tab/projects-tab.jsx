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
                                        A data-aggregation and educational <strong>pathology</strong> tool that pushes for the digitization of the field.
                                        Based upon the principal of image-based education and applied learning, Pathcha strives to revolutionalize how we learn and teach Pathology.
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/pathcha-frontend" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                        The Trivago of shoes. Powered by a Selenium-based webscraper, Hype4Less connects sneakerheads to the best deals on their favourite footwear products.
                                        Currently scrapes Nike, Adidas, Footlocker, and The Running Room (Canada only).
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/Hype4Less" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                    Teachers are given a paint-like interface where they can draw on the whiteboard to present their lesson to students who are able to join and watch the session live. 
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/erf4ngh/myBoard.space" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                        <Card id="golang-spotify">
                            <Card.Body className="card-body">
                                <Card.Text>
                                    Go Spotify Playlist Builder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card>
                                <Card.Header>Go Spotify Playlist Builder</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                    A Golang CLI Application for building Spotify playlists based on Billboard Top 100 charts. Users can select which chart they'd like to scrape (rap, country, pop). 
                                    <br/><br/>
                                    Must be authorized on Spotify Developer console to use. 
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/golang-playlist-builder" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/covid-bot" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                <Card.Header>Foodprint Web</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Text>
                                        Front-end companion app that allows foodies to log various dining experiences and store them in a personalized map.

                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/foodprint-web" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                        A terminal-based text editor written in C. Simpad <strong>(Simple Notepad)</strong> is extremely lightweight, with absolutely zero bloat.
                                        Currently supports basic save, quit, and text search functionality, as well as highlighting for C keywords.
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/simpad" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                        all factors of the admission process. 
                                    </Card.Text>
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/UWEACC" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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
                                    <div class="icon-wrapper">
                                        <a class="styled-icon" href="https://github.com/kevin-pierce/The-Labyrinth" style={{justifySelf:"center"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </div>
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