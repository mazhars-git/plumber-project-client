import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import serviceImg from '../../../images/service-1.png';
import serviceImg_2 from '../../../images/service-2.png';
import serviceImg_3 from '../../../images/service-3.png';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    // const servicesInfo= [
    //     {
    //         img: serviceImg,
    //         title: 'Kitchen Plumbing',
    //         description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
    //         price: '120'
    //     },
    //     {
    //         img: serviceImg_2,
    //         title: 'Bath Plumbing',
    //         description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
    //         price: '250'
    //     },
    //     {
    //         img: serviceImg_3,
    //         title: 'Filter Plumbing',
    //         description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
    //         price: '300'
    //     }
    // ]
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