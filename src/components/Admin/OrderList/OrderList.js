import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';
import OrderDetail from '../OrderDetail/OrderDetail';
import './OrderList.css'
const OrderList = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://pacific-mesa-84577.herokuapp.com/allBookingsData')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    let dataSidebar="Order List";
    return (
        <div className="">
        <div className="row rowOrder">
            <div className="col-md-4  col-sm-12 pb-5">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-8 col-sm-12 colOrder">
            <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>
                <div className="col-md-12">
                    <table class="table table-striped table-hover table-responsive-xs tableOrder">
                        <thead>
                            <tr>
                                <th scope="col fontOrderStyle">Name</th>
                                <th scope="col fontOrderStyle">Email ID</th>
                                <th scope="col fontOrderStyle">Service</th>
                                <th scope="col fontOrderStyle">Pay With</th>
                                <th scope="col fontOrderStyle">Status</th>
                            </tr>
                        </thead>
                        {
                            bookings.map(booking => <OrderDetail booking={booking}></OrderDetail>)
                        }
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderList;
{/* <ul className=" list-group ulOrderStyle">
                    <li className=" list-group-item liStyleOrder">
                        <span className="listStyleOrder nameStyle">Name</span>
                        <span className="listStyleOrder  emailStyle">Email ID</span>
                        <span className="listStyleOrder serviceStyle ">Service</span>
                        <span className="listStyleOrder payStyle ">Pay With</span>
                        <span className="listStyleOrder ">Status</span>
                    </li>
                   </ul> */}