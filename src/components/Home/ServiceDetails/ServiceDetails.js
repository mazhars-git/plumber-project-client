import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center service-box">
           <div className="service-content">
                {
                    service.image ? <img className="img-fluid" src={`data:image/png;base64, ${service.image.img}`}/>
                    :
                    <img className="img-fluid" src={`http://localhost:5500/${service.image.img}`} alt=""/>
                }
                <div className="content-box">
                    <h4 className="text-brand">{service.title}</h4>
                    <p>{service.description}</p>
                    <h5>$320</h5>
                    <Link to='/book'>
                        <button className="btn btn-brand">Order</button>
                    </Link>
                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;