import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';


const AdminMaker = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      const adminData = {
        email: data.email
      };
      const url = `https://pacific-mesa-84577.herokuapp.com/adminMaker`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(adminData)
      })
        .then(res => alert(res))
    };
    let dataSidebar='Admin Maker';
  
    
    return (
        <div className="container ">
          <div className="row">

         
        <div className="col-md-4  pb-5">
              <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-8">
        <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle border-rounded">
            <label for="servicename">Email</label>
            <input name="email" type="email" id="servicename" className="form-control " defaultValue="" ref={register} />
          <input type="submit" className="mt-3 btn btn-primary" value="Save" />
      </form>
      </div>
      </div> 
      </div>

    );
};

export default AdminMaker;