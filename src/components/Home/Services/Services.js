import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import serviceImg from '../../../images/service-1.png';
import serviceImg_2 from '../../../images/service-2.png';
import serviceImg_3 from '../../../images/service-3.png';

const Services = () => {
    const servicesInfo= [
        {
            img: serviceImg,
            title: 'Kitchen Plumbing',
            description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
            price: '120'
        },
        {
            img: serviceImg_2,
            title: 'Kitchen Plumbing',
            description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
            price: '250'
        },
        {
            img: serviceImg_3,
            title: 'Kitchen Plumbing',
            description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
            price: '300'
        }
    ]
    return (
        <section className="py-5">
            <h2 className="text-center text-brand">Services We Provide</h2>
            <div className="container">
                <div className="row">
                    {
                        servicesInfo.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;