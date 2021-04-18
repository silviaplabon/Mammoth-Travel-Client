import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom";

const UserSidebar = () => {
    return (
        <>
        <div className="col-md-12   addProductStyle">
          <div className="m-auto  py-2 linkProduct">
           <Link to="/" className=""><FontAwesomeIcon className="iconSize me-2" icon={faBars} />Book</Link>
          </div>
        </div>
        <div className="col-md-12  m-auto  py-3 linkProduct">
          <Link to="/bookingList" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Booking List</Link>
        </div>
        <div className="col-md-12 m-auto py-2 linkProduct">
          <Link to="/addTestimonial" className=""><FontAwesomeIcon className="iconSize me-2" icon={faEdit} />Review</Link>
        </div>
        </>
    );
};

export default UserSidebar;