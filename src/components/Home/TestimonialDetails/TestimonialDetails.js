import React from 'react';
import './TestimonialDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const TestimonialDetails = ({review}) => {
    return (
        <div className="col-md-4">
            <div className="review-content">
                <div className="profile d-flex justify-content-center">
                    <div className="profile-img">
                        {
                            review.image ? <img className="img-round" src={`data:image/png;base64, ${review.image.img}`}/>
                            :
                            <img className="img-round" src={`https://arcane-garden-78714.herokuapp.com/${review.image.img}`} alt=""/>
                        }
                    </div>
                    <div className="profile-title align-self-center pt-3">
                        <h4>{review.name}</h4>
                        <p>{review.designation}</p>
                    </div>
                </div>
                <small className="ratings">
                    <ul>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStarHalfAlt} /></li>
                    </ul>
                </small>
                <div className="text-review">
                    <p>{review.description}</p>
                </div>

            </div>
        </div>
    );
};

export default TestimonialDetails;