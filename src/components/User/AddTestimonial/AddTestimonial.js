import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import {Link } from "react-router-dom";
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';


const TestimonialDetail = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const testimonialData = {
            name: data.name,
            designation: data.designation,
            description: data.description,
        };
        const url = `https://pacific-mesa-84577.herokuapp.com/addTestimonial`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => console.log('server side response', res))
    };
    let dataSidebar="Add Testimonial";
    return (
        <div className="container">
    <div className="row ">
            <div className="col-md-4 col-sm-12 col-xs-12 pb-5 ">
                  <UserSidebar></UserSidebar>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 ms-1">
            <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 mt-5 formStyle">
                    <div className="row d-flex">
                        <div className="col-md-7">
                            <input name="name" id="servicename" className="form-control " placeholder="Your Name" defaultValue="" ref={register} />
                            <input name="designation" className="form-control " defaultValue="" placeholder="Company's Name Designation" ref={register} />
                            <textarea name="description" className="form-control " placeholder="description" defaultValue="" ref={register} />
                            {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            <input type="submit" className="mt-3 btn btn-primary" value="Save" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;