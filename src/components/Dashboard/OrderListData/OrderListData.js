import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton, Table } from 'react-bootstrap';
import './OrderListData.css';

const OrderListData = ({orders}) => {
    const [status, setStatus] = useState(null);

    const handleChangeStatus = e => {
        const updateStatus = e.target.value;
        setStatus(updateStatus);
    }
    return (
        <div className="orderList-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>SL No.</th>
                    <th>Order Name</th>
                    <th>Order Status</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => 

                        <tr>
                        <td>{index + 1}</td>
                        <td>{order.service}</td>
                        <td>
                            <select onChange={handleChangeStatus}>
                                <option style={{color: 'red'}} value="Orange">Pending</option>
                                <option style={{color: 'yellow'}} value="Radish">On going </option>
                                <option style={{color: 'green'}} value="Cherry">Done</option>
                            </select>
                        </td>
                        </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderListData;