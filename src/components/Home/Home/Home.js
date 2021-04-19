import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderBottom from '../HeaderBottom/HeaderBottom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <AboutUs></AboutUs>
            <Services></Services>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;