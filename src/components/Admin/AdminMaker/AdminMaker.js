import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';


const AdminMaker = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      const adminData = {
        email: data.email
      };
      const url = `http://localhost:4200/adminMaker`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(adminData)
      })
        .then(res => alert(res))
    };
  
    
    return (
        <div className="container row m-auto">

        <div className="col-md-4 navbarAddProduct pb-5 bg-warning">
              <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-8">

        <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle">
            <label for="servicename">Email</label>
            <input name="email" type="email" id="servicename" className="form-control " defaultValue="" ref={register} />
          <input type="submit" className="mt-3 btn btn-primary" value="Save" />
      </form>
      </div>
      </div>
    );
};

export default AdminMaker;