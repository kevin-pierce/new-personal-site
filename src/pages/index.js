import React from 'react';
import { Helmet } from 'react-helmet';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Button, Tabs, Tab } from 'react-bootstrap';
import ResumePDF from '../../static/KevinPierce_2B_Resume_V2.pdf';
import Favicon from '../images/KP-favicon.ico';

// Components
import ProfilePicture from "../components/profile-picture/profile-picture";
import MediaButtons from "../components/media-buttons/media-buttons";
import ProfileContent from "../components/profile-content/profile-content";

// Styling
import './index.scss'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Kevin Pierce</title>
        <link rel="icon" type="image/png" href={Favicon}/>
      </Helmet>

      <div className="index-page-wrapper">
        <h1 className="name-large">KEVIN PIERCE</h1>
        <p>Incoming 2B Software Engineering @uWaterloo</p>
        <ProfilePicture/>
        <Button href={ResumePDF} className="btn-lg mt-5 mb-5" style={{paddingTop:"18px", paddingBottom:"18px"}}>Resume</Button>
        <MediaButtons/>
        <ProfileContent/>
      </div>
      <hr/>
      <div className="index-page-footer">
        <small>Built with <a href="https://reactjs.org/">React</a></small>
      </div>
    </>
  )
}

export default IndexPage
