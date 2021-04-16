import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid" src={service.img} alt=""/>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <p>$ {service.price}</p>
            <button className="btn btn-brand">Order</button>
        </div>
    );
};

export default ServiceDetails;