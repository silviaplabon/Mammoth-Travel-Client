import React from 'react';
import imageAbout from '../../images/img.jpg';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCity, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const AboutTravelia = () => {
    const props = useSpring({ number: 15, from: { number: 0 } });

    return (
        <section className="my-5 container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={imageAbout} alt="" className="img-fluid h-100" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3 className="text-center">About Company</h3>
                    <h5 className="fw-bolder w-100 text-center">We Provide You An Ultimate Travel Experience</h5>
                    <p> You can choose your favorite destination and start planning your long-awaited vacation. 
                        You can also check availability of flights and hotels quickly and easily, 
                        in order to find the option that best suits your needs.</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="overflow-hidden w-25">
                            <h6>Travel Types</h6>
                            <FontAwesomeIcon icon={faCarSide} style={{ fontSize: '4em',color:'#2d524a' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Hotel Types</h6>
                            <FontAwesomeIcon icon={faCity} style={{ fontSize: '4em',color:'2d524a' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Service Center</h6>
                            <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '4em',color:'2d524a' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                        </div>  
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutTravelia;