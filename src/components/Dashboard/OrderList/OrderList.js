import React, { useEffect, useState } from 'react';
import OrderListData from '../OrderListData/OrderListData';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://hello-plumber-server.onrender.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
       
    <section>
        <h1 className="text-center text-brand py-5">All Orders</h1>
        <div className="container">
           <OrderListData orders={orders}></OrderListData>
        </div>
    </section>
           
       
    );
};

export default OrderList;