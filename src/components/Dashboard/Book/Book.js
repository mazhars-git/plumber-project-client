import React, { useContext, useEffect, useState } from 'react';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import './Book.css';

const stripePromise = loadStripe("pk_test_51Ie6oIB7HII9WgF8Xf5iAX7rMg3Ig0a33Y1CyRKK7AzQmvHemGkgGFPR3jhDduLFrE3pkgs1td0zuJMbgNmEzPEI0095xeijHZ");

const Book = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [payId, setPayId] = useState(null);

    useEffect(() => {
        fetch('https://arcane-garden-78714.herokuapp.com/service/'+ id)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id])

    const handlePaymentSuccess = (paymentId) => {
        setPayId(paymentId);
    }

    const handleSubmit = () => {
        const orderData = {
            orderId: id,
            payment: payId, 
            ...loggedInUser, 
            service: order.title, 
            orderDate: new Date().toDateString};

        fetch('https://arcane-garden-78714.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Place Order Successfully');
            }
        })
    }
    

    return (
        <section className="container-fluid payment-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                        <h2 className="text-center py-4 text-brand">Book your service</h2>
                    
                        <div className="pb-2 row">
                            <div className="payment col-md-4">
                                <Elements stripe={stripePromise}>
                                    <Payment handlePayment={handlePaymentSuccess}></Payment>
                                </Elements>
                            </div>
                            <div className="col-md-8">
                                <form onSubmit={handleSubmit} className="w-75 m-auto">
                                    <input type="text" className='form-control' name="name"placeholder="Name"/>
                                    <br/>
                                    <input type="email" className='form-control' name="email" placeholder="Email"/>
                                    <br/>
                                    <input type="text" className='form-control' placeholder="Address"/>
                                    <br/>
                                    <button className="btn btn-success">Submit</button>
                                </form>
                            </div>
                           
                        </div>
                </div>
            </div>
        </section>

   
   

    );
};

export default Book;