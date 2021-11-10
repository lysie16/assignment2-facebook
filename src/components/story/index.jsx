import React from 'react'
import "./styles.css";
import Avatar from '@mui/material/Avatar';

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{ title } </h4>
        </div>
    );
}

export default Story;