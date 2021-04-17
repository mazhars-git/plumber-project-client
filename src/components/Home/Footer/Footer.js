import React from 'react';
import './Footer.css';
import logo from '../../../images/logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faMailBulk, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    
    return (
        <section className="footer-area pt-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 text-center">
                        <div className="logo-area d-flex">
                            <div className="logo">
                                <img style={{width: '50px'}} src={logo} alt=""/>
                            </div>
                            <div className="text ml-2 pt-1 align-self-center">
                                <h3>HELLO PLUMBER</h3>
                            </div>
                        </div>
                        <div className="social-icon pt-3">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 address-area">
                        <h3>OUR ADDRESS</h3>
                        <ul>
                            <li><FontAwesomeIcon className="addressIcon" icon={faHome} /> St. Patrick’s Woollen Mills, Cork, Ireland</li>
                            <li><FontAwesomeIcon className="addressIcon" icon={faPhone} /> +353 21 245 5250</li>
                            <li><FontAwesomeIcon className="addressIcon" icon={faPhone} /> +353 21 245 5250</li>
                            <li><FontAwesomeIcon className="addressIcon" icon={faEnvelope} /> helloplumbs@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="footer-bottom">&copy; {new Date().getFullYear} Plumbers.com, Mazhar All right reserved. </p>
        </section>
    );
};

export default Footer;