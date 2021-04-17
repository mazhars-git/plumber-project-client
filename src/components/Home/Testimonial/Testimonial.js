import React from 'react';
import reviewImg_1 from '../../../images/profile-1.png';
import reviewImg_2 from '../../../images/profile-4.png';
import reviewImg_3 from '../../../images/profile-3.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    const reviewInfos=[
        {
            img: reviewImg_1,
            name: 'David Alone',
            title: 'CEO, DK private Ltd.',
        },
        {
            img: reviewImg_2,
            name: 'Lui Je',
            title: 'CEO, Advertising corp.',
        },
        {
            img: reviewImg_3,
            name: 'John Deu',
            title: 'CEO, LP private Ltd',
        },
    ]
    return (
        <section className="testimonial py-5">
            <h2 className="text-center text-brand py-3">Client Reviews</h2>
            <div className="container">
                <div className="row py-5">
                    {
                        reviewInfos.map(review => <TestimonialDetails review={review}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;