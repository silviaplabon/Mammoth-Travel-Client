import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
const Testimonials = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/testimonialsData')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <>
        <h2 className="text-center">Testimonials</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2">
            {
              testimonials.map(testimonial=><TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
            }
        </div>
        </>
    );
};

export default Testimonials;