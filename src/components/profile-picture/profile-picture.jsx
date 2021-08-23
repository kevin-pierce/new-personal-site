import React from 'react';
import './profile-picture.scss';
import ProfilePic from '../../../static/kp-profile-picture.jpeg';

const ProfilePicture = () => {
    return (
        <div className="profile-picture-wrapper">
            <img src={ProfilePic}/>
        </div>
    )
}

export default ProfilePicture;