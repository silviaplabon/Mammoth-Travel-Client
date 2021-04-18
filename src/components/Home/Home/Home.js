import React from 'react';
import AboutTravelia from '../../AboutTravelia/AboutTravelia';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar'
import Testimonials from '../../Testimonials/Testimonials/Testimonials';
import Feature from '../Feature/Feature/Feature';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className="container">
        
            <Navbar></Navbar>
        <div className="headerContainer">
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Feature></Feature>
            <AboutTravelia></AboutTravelia>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>      
        </div>
    );
};

export default Home;