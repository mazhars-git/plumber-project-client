import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingData from '../BookingData/BookingData';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const [loggedInUse, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://hello-plumber-server.onrender.com/orders?email='+loggedInUse.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Your Booked Services</h2>
                    <BookingData bookings={bookings}></BookingData>
                </div>
            </div>
        </section>
    );
};

export default Bookings;