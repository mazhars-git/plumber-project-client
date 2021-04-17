import React from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <OrderList></OrderList>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;