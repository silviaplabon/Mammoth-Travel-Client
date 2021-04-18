import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import OrderDetail from '../OrderDetail/OrderDetail';
import './OrderList.css'
const OrderList = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:4200/allBookingsData')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <div className="container">
        <div className="row ">
            <div className="col-md-4  col-sm-12 pb-5 bg-warning">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-8 col-sm-12">
                <div className="col-md-12">
                    <table class="table table-striped table-hover table-responsive-xs">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
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