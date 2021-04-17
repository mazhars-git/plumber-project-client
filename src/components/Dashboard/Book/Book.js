import React from 'react';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Book = () => {
    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Book your service</h2>
                    <Elements stripe={stripePromise}>
                        <Payment></Payment>
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Book;