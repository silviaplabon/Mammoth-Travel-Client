import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import Testimonials from '../../Testimonials/Testimonials/Testimonials';
import Feature from '../Feature/Feature/Feature';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className="container">
        <div className="headerContainer">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Feature></Feature>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>      
        </div>
    );
};

export default Home;