import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import '../HeaderMain/HeaderMain.css';

const Header = () => {
    return (
        <section className="header-area">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;