import React from 'react';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'
import './AdminSidebar.css'

const AdminSidebar = () => {
    return (
        <>
        <div className="col-md-12 col-sm-12 ">
          <div className="m-auto  py-2 linkService">
           <Link to="/orderList" className=""><FontAwesomeIcon className="iconSize me-2" icon={faBars} />Order List</Link>
          </div>
        </div>
        <div className="col-md-12 col-sm-12  m-auto  py-3 linkService">
          <Link to="/addService" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Add Service</Link>
        </div>
        <div className="col-md-12 col-sm-12 m-auto  py-3 linkService">
          <Link to="/adminMaker" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Make Admin</Link>
        </div>
        <div className="col-md-12 col-sm-12 m-auto py-2 linkService">
          <Link to="/manageService" className=""><FontAwesomeIcon className="iconSize me-2" icon={faEdit} />Manage Service</Link>
        </div>
        </>
    );
};

export default AdminSidebar;