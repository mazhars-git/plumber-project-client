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
            title: 'Bath Plumbing',
            description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
            price: '250'
        },
        {
            img: serviceImg_3,
            title: 'Filter Plumbing',
            description: 'This service available for Kitchen Plumbing. You can order this service for your kitchen.',
            price: '300'
        }
    ]
    return (
        <section style={{backgroundColor: '#273c75'}} className="py-5">
            <h2 className="text-center text-brand text-white py-5">Services We Provide</h2>
            <div className="container">
                <div className="row py-3">
                    {
                        servicesInfo.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;