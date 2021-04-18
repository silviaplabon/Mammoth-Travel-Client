import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
const Testimonials = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://pacific-mesa-84577.herokuapp.com/testimonialsData')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <>
        <h2 className="text-center mt-5">Testimonials</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2">
            {
              testimonials.map(testimonial=><TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
            }
        </div>
        </>
    );
};

export default Testimonials;