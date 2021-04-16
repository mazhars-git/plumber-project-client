import React from 'react';
import featureImg from '../../../images/feature-1.jpg';
import { faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';
import AboutInfo from '../AboutInfo/AboutInfo';

const AboutUs = () => {
    const aboutInfo = [
        {
            img: faUsers,
            title: 'Lots of plumbers',
            description: 'We have more then fifty employees. We can provide services easily. We can provide also emergency plumbing service.'
        },
        {
            img: faAward,
            title: 'We are trusted',
            description: 'We have trusted service team. So, you can take our service without any kind of doubt. You are totally save from us.'
        },
        {
            img: faLifeRing,
            title: 'Best Service',
            description: 'We try to give you best service. We try to fix your problem in our label best. We are always ready to give best service for you.'
        }
    ]
    return (
        <section className="about-us pt-5 pb-5">
            <h2 className="text-brand text-center py-5">Why Choose Us</h2>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 align-self-center">
                        <h2 className="pb-3">We Provide Best Service <br/> In the Cork City.</h2>
                        <p className="pb-3 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae dolores deleniti, quibusdam in voluptatibus quaerat? Architecto excepturi dolor unde nemo in impedit eius nihil.</p>
                        <button className="btn btn-brand">Explore More</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={featureImg} alt=""/>
                    </div>
                </div>
                <div className="row py-5">
                    {
                        aboutInfo.map(info => <AboutInfo info={info}></AboutInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutUs;