import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const {_id, title, description, image} = props.service;
    return (
        <div className="col-md-4 text-center service-box">
           <div className="service-content">
                {
                    image ? <img className="img-fluid" src={`data:image/png;base64, ${image.img}`}/>
                    :
                    <img className="img-fluid" src={`https://arcane-garden-78714.herokuapp.com/${image.img}`} alt=""/>
                }
                <div className="content-box">
                    <h4 className="text-brand">{title}</h4>
                    <p>{description}</p>
                    <h5 className="text-brand">$320</h5>
                    <Link to={'/book/'+_id}>
                        <button className="btn btn-brand">Order</button>
                    </Link>
                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;