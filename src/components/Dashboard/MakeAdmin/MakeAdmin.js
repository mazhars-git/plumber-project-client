import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = e => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleSubmit = () => {
        const adminData = { ...admin}

        fetch('https://arcane-garden-78714.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 pt-5 px-5">
                    <h2 className="text-center text-brand py-4">Make Admin here</h2>
                    <form onSubmit={handleSubmit} className="w-50 m-auto addBox">
                        <div class="form-group">
                            <label for="email" className="text-white">Email address</label>
                            <div className="mail-box d-flex">
                                <input onBlur={handleBlur} type="email" className="form-control me-3" id="email" name="email" placeholder="Enter email"/>
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