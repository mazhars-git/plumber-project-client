import React from 'react';
import { Table } from 'react-bootstrap';

const BookingData = ({bookings}) => {
    return (
        <div className="orderList-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>SL No.</th>
                    <th>Booking Service</th>
                    <th>Service Price</th>
                    <th>Service Status</th>
                
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((book, index) => 

                        <tr>
                        <td>{index + 1}</td>
                        <td>{book.service}</td>
                        <td>{book.price}</td>
                        <td>{book.status}</td>
                        </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default BookingData;