import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 pt-5 px-5">
                    <h2 className="text-center text-brand py-4">Make Admin here</h2>
                    <form className="w-50 m-auto addService">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <div className="mail-box d-flex">
                                <input type="email" className="form-control me-3" id="exampleInputEmail1" placeholder="Enter email"/>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;