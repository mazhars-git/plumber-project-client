import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newReview = {...reviewInfo};
        newReview[e.target.name] = e.target.value;
        setReviewInfo(newReview);
    }
    const handleChangeFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmitReview = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', reviewInfo.name);
        formData.append('designation', reviewInfo.designation);
        formData.append('description', reviewInfo.description);

        fetch('https://hello-plumber-server.onrender.com/addReview', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <section className="container-fluid dashboard-bg">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-4 text-brand">Add your review</h2>
                    <form onSubmit={handleSubmitReview} className="w-50 m-auto addBox">
                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" name="name" className="form-control my-2" placeholder="Enter Your Name"/>
                            <input onBlur={handleBlur} type="text" name="designation" className="form-control my-2" placeholder="Company Name, Designation"/>
                            <textarea onBlur={handleBlur} type="text" name="description" className="form-control my-2" placeholder="Description"/>
                        </div>
                        <div class="form-group pt-4 mt-2">
                            <label className="uploadImage" for="image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                            <input onChange={handleChangeFile} type="file" id="image" hidden/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;