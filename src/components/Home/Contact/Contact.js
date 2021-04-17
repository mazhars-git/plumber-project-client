import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-area">
            <h2 className="text-center text-white py-5">Contact With Us</h2>
            <div className="container">
                <div className="row w-50 m-auto py-5 contact-box">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subject"/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" cols="30" rows="5" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;