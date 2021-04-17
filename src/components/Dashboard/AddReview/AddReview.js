import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Add your review</h2>
                    <form className="w-50 m-auto addBox">
                        <div class="form-group">
                            <input type="text" className="form-control my-2" placeholder="Enter Your Name"/>
                            <input type="text" className="form-control my-2" placeholder="Company Name, Designation"/>
                            <textarea type="text" className="form-control my-2" placeholder="Description"/>
                        </div>
        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;