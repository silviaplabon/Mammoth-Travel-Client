import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ServiceDetail from '../../Home/ServiceDetail/ServiceDetail';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';

const ManageService = () => {
    const [services,setServices]=useState([])
    useEffect(() => {
        fetch('http://localhost:4200/serviceData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container row m-auto ">
            <div className="col-md-4 navbarAddProduct pb-5 bg-warning">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-8">
                <div className="row  row-cols-1 row-cols-md-2">
                {

                     services.map(service =><ServiceDetail state={true} service={service}></ServiceDetail> )
                }
                </div>
            </div>

        </div>
    );
};

export default ManageService;