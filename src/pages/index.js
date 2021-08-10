import * as React from "react"
import "bootswatch/dist/lux/bootstrap.min.css";
import { Button, Tabs, Tab } from 'react-bootstrap';
import ResumePDF from '../../static/kevin-pierce-resume-new.pdf';

// Components
import ProfilePicture from "../components/profile-picture/profile-picture";
import MediaButtons from "../components/media-buttons/media-buttons";
import ProfileContent from "../components/profile-content/profile-content";

// Styling
import './index.scss'

const IndexPage = () => {
  return (
    <>
      <div className="index-page-wrapper">
        <h1 className="name-large">KEVIN PIERCE</h1>
        <p>2A Software Engineering @uWaterloo</p>
        <ProfilePicture/>
        <Button href={ResumePDF} className="btn-lg mt-5 mb-5" style={{paddingTop:"18px", paddingBottom:"18px"}}>Resume</Button>
        <MediaButtons/>
        <ProfileContent/>
      </div>
      <hr/>
      <div className="index-page-footer">
        <small>Built with <a href="https://reactjs.org/">React</a> | <a href="https://bootswatch.com/lux/">Lux Theme</a> by <a href="https://thomaspark.co/">Thomas Park</a></small>
      </div>
    </>
  )
}

export default IndexPage
