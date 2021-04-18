import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://arcane-garden-78714.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
   
    return (
        <section style={{backgroundColor: '#273c75'}} className="py-5">
            <h2 className="text-center text-brand text-white py-5">Services We Provide</h2>
            <div className="container">
                <div className="row py-3">
                    {
                        services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;