import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://hello-plumber-server.onrender.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Manage Orders</h2>
                    <ServiceData services={services}></ServiceData>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;