import React, { useEffect, useState } from 'react'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('https://pacific-mesa-84577.herokuapp.com/serviceData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <>
        <h2 className="text-center mt-5">Our Awesome Services</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2" id="serviceShow">
     
            {
              services.map(service=><ServiceDetail service={service} state={false}></ServiceDetail>)
            }
        </div>
        </>
    );
};

export default Services;