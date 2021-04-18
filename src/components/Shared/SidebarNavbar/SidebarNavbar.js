import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const SidebarNavbar = (props) => {
    const dataSidebar=props.dataSidebar;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbarDesign container pt-5">
      <div className="container-fluid">
        <h1 className="navbar-brand h2HeaderColor fw-bold" href="#">{dataSidebar}</h1>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {loggedInUser.email && (loggedInUser.displayName ? <button className=" text-white btn buttonColor me-2 mt-1 buttonStyleHeader">{loggedInUser.displayName}</button>
              : <button className="btn  me-2  buttonStyle buttonColor text-white mt-1">{loggedInUser.email}</button>)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNavbar;