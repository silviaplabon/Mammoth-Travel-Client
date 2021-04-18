import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [adminState, setAdminState] = useState([]);
  const token = sessionStorage.getItem('token');
  const handleLogout = () => {
    setLoggedInUser({});
    sessionStorage.setItem('token', '');
  }




  useEffect(() => {
    fetch('https://pacific-mesa-84577.herokuapp.com/userIsAdmin?email=' + loggedInUser?.email)
      .then(res => res.json())
      .then(data => { 
        if(data){
          setAdminState(true)
        }
        else{
          setAdminState(false)
        }
      })
  }, [loggedInUser.email])



  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbarDesign container pt-5">
      <div className="container-fluid">
        <h1 className="navbar-brand h2HeaderColor fw-bold" href="#">Mammoth Travel</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>

            {
              adminState ? <> <Link to="/orderList" className=" nav-link">Orders</Link><Link to="/manageService" className="nav-link">Admin</Link></> :
                <Link to="/user/bookingList" className=" nav-link">Orders</Link>
            }


            {loggedInUser.email && (loggedInUser.displayName ? <button className="btn buttonColor me-2  buttonStyleHeader text-white">{loggedInUser.displayName}</button>
              : <button className="btn  me-2  buttonStyle buttonColor text-white">{loggedInUser.email}</button>)}

            {loggedInUser.email ? <button onClick={() => handleLogout()} className="text-white btn buttonColor logStyle mt-1 buttonStyleHeader ms-1">Logout</button> :
              <Link to="/login" className="btn  ms-1 buttonStyleHeader buttonColor text-white loginButton mt-1">Login</Link>
            }


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;