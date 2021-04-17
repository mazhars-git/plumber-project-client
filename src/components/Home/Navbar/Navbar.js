import React from 'react';
import logo from '../../../images/logo-1.png';

const Navbar = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg text-white">
                <div className="container-fluid">
                    <div className="logo">
                        
                        <a className="navbar-brand" href="#"><img style={{width: '40px', marginRight: '10px'}} src={logo} alt=""/>HELLO PLUMBER</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link">Reviews</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;