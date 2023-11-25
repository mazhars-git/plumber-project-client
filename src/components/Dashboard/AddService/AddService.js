import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleChangeFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://hello-plumber-server.onrender.com/addAService', {
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
                    <h2 className="text-center py-4 text-brand">Add service here</h2>
                    <form onSubmit={handleSubmit} className="w-75 m-auto">
                        <div className="addBox d-flex">
                            <div class="form-group me-5 w-75">
                                <label className="text-white" for="serviceTitle">Service Title</label>
                                <input onBlur={handleBlur} type="text" name="title" class="form-control" id="serviceTitle" placeholder="Enter title"/>
                                
                                <label className="text-white" for="description">Description</label>
                                <textarea onBlur={handleBlur} type="text" name="description" class="form-control" id="description" placeholder="Enter description"/>
                            </div>
                            <div class="form-group pt-4 mt-2">
                                <label className="uploadImage" for="image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                                <input onChange={handleChangeFile} type="file" id="image" hidden/>
                            </div>
                        </div>
                        <div className="submit-button text-right pt-4">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default AddService;