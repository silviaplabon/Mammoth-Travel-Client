import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../images/Traveler_Image_WWF_Travel.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-5 col-sm-12 col-xs-12 ">
                <h1 style={{color: '#3A4256'}}>WELCOME TO MAMMOTH TRAVEL<br/> </h1>
                <h6> Book cheap hotels and make payment facilities.</h6>
                <p className="text-secondary">Find a wide variety of airline tickets and cheap flights, hotels, tour packages, car rentals, cruises and more.</p>
                <Link to="/appointment" className="btn btn-brand buttonColor text-white">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 ">
                <img src={headerImg} alt="" className="img-fluid imgHeader"/>
            </div>
        </main>
    );
};

export default HeaderMain;