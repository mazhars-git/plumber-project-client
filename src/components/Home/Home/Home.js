import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;