import React from 'react';
import './profile-picture.scss';
import ProfilePic from '../../../static/profile-pic.jpeg';

const ProfilePicture = () => {
    return (
        <div className="profile-picture-wrapper">
            <img src={ProfilePic}/>
        </div>
    )
}

export default ProfilePicture;