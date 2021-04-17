import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center service-box">
           <div className="service-content">
                <img className="img-fluid" src={service.img} alt=""/>
                <div className="content-box">
                    <h4 className="text-brand">{service.title}</h4>
                    <p>{service.description}</p>
                    <p>$ {service.price}</p>
                    <button className="btn btn-brand">Order</button>
                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;