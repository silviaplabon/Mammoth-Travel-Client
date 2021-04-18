import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ServiceDetail from '../../Home/ServiceDetail/ServiceDetail';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';

const ManageService = () => {
    const [services,setServices]=useState([])
    useEffect(() => {
        fetch('https://pacific-mesa-84577.herokuapp.com/serviceData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    let dataSidebar="Manage Service";

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4  pb-5 ">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-8">
            <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>
                <div className="row  row-cols-1 row-cols-lg-2 row-cols-xxl-3">
                {

                     services.map(service =><ServiceDetail state={true} service={service}></ServiceDetail> )
                }
                </div>
            </div>
 </div>
        </div>
    );
};

export default ManageService;