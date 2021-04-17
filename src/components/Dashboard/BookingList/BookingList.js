import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Your Booked Services</h2>
                    
                </div>
            </div>
        </section>
    );
};

export default BookingList;