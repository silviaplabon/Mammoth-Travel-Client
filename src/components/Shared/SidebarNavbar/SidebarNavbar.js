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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {loggedInUser.email && (loggedInUser.displayName ? <button className=" text-white btn buttonColor me-2  buttonStyleHeader">{loggedInUser.displayName}</button>
              : <button className="btn  me-2  buttonStyle buttonColor text-white">{loggedInUser.email}</button>)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNavbar;