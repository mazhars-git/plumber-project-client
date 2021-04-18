import React from 'react';
import bgImage from '../../../images/bg-1.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container header-content d-flex align-items-center">
            <div className="row ">
                <div className="col-md-6 p-3 align-self-center">
                    <h1 className="text-white pb-3 text-brand">For Your Plumbing Service <br/> 24/7 days Available</h1>
                    <p className="text-white pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, enim. Sequi at distinctio, praesentium corrupti voluptate omnis beatae id dolorum.</p>
                    <button className="btn btn-brand">Explore More</button>
                </div>
                <div className="col-md-6">
                    <img style={{borderRadius: '5px'}} className="img-fluid" src={bgImage} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;