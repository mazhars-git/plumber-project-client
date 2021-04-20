import React from 'react';
import { Table } from 'react-bootstrap';

const ServiceData = ({services}) => {
    return (
        <div>
           <Table striped bordered hover>
                <thead className="text-center text-white">
                    <tr>
                    <th>SL No.</th>
                    <th>Service Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, index) => 

                        <tr>
                        <td>{index + 1}</td>
                        <td>{service.title}</td>
                        <td>
                            <button className="btn btn-brand">Delete</button>
                        </td>
                        </tr>

                        )
                    }
                </tbody>
            </Table> 
        </div>
    );
};

export default ServiceData;