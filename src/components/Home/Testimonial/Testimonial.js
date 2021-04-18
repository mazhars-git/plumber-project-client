import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
   
    return (
        <section className="testimonial py-5">
            <h2 className="text-center text-brand py-3">Client Reviews</h2>
            <div className="container">
                <div className="row py-5">
                    {
                        reviews.map(review => <TestimonialDetails key={review._id} review={review}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;