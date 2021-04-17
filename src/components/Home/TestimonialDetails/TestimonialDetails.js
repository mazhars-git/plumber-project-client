import React from 'react';
import './TestimonialDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialDetails = ({review}) => {
    return (
        <div className="col-md-4">
            <div className="review-content">
                <div className="profile d-flex">
                    <div className="profile-img">
                        <img style={{width: '100px', height: '100px', borderRadius: '50%', marginRight: '15px'}} src={review.img} alt=""/>
                    </div>
                    <div className="profile-title align-self-center pt-3">
                        <h4>{review.name}</h4>
                        <p>{review.title}</p>
                    </div>
                </div>

                <div className="text-review">
                    <p><FontAwesomeIcon icon={faQuoteLeft} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum itaque ratione, eius unde velit optio quas qui amet veritatis!  <FontAwesomeIcon icon={faQuoteRight} /></p>
                </div>

            </div>
        </div>
    );
};

export default TestimonialDetails;