import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../AboutUs/AboutUs.css';

const AboutInfo = ({info}) => {
    return (
        <div className="col-md-4 text-center about-info">
            <div className="aboutInfo-box">
                <p style={{fontSize: '50px', color: 'tomato'}}><FontAwesomeIcon className="about-icon" icon={info.img} /></p>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default AboutInfo;