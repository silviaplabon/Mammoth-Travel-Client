import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faHome, faGripHorizontal, faUserPlus, faPlus, faTools } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import './UserSidebar.css'

const UserSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 col-sm-12 col-xs-12  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
               
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Book</span>
                    </Link>
                </li>
                 <li>
                    <Link to="/user/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/user/addTestimonial" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Review</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/admin/manageVehicles" className="text-white">
                        <FontAwesomeIcon icon={} /> <span>Manage Services</span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default UserSidebar;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'
// import {Link } from "react-router-dom";

// const UserSidebar = () => {
//     return (
//         <>
//         <div className="col-md-12   addProductStyle">
//           <div className="m-auto  py-2 linkProduct">
//            <Link to="/" className=""><FontAwesomeIcon className="iconSize me-2" icon={faBars} />Book</Link>
//           </div>
//         </div>
//         <div className="col-md-12  m-auto  py-3 linkProduct">
//           <Link to="/bookingList" className="" ><FontAwesomeIcon className="iconSize me-2" icon={faPlus} />Booking List</Link>
//         </div>
//         <div className="col-md-12 m-auto py-2 linkProduct">
//           <Link to="/addTestimonial" className=""><FontAwesomeIcon className="iconSize me-2" icon={faEdit} />Review</Link>
//         </div>
//         </>
//     );
// };

// export default UserSidebar;