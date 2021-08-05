import * as React from "react"
import "bootswatch/dist/lux/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import ResumePDF from '../../static/kevin-pierce-resume-new.pdf';

// Components
import ProfilePicture from "../components/profile-picture/profile-picture";
import MediaButtons from "../components/media-buttons/media-buttons";

// Styling
import './index.scss'

const IndexPage = () => {
  return (
    <div className="index-page-wrapper">
      <h1 className="name-large">KEVIN PIERCE</h1>
      <p>2A Software Engineering @uWaterloo</p>
      <ProfilePicture/>
      <Button href={ResumePDF} className="btn-lg">Resume</Button>
      <MediaButtons/>
      
    </div>
  )
}

export default IndexPage
