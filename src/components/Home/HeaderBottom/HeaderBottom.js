import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderBottom.css';

const HeaderBottom = () => {
    return (
        <section className="container-fluid header-bottom">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <h2>A Best Plumbing Service</h2>
                        <p>We have more then 15 years experience</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3><FontAwesomeIcon className="addressIcon" icon={faPhone}/>+00 16 155 555</h3>
                        <button className="btn btn-brand">Call Us Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderBottom;