import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token=sessionStorage.getItem('token');
    const handleLogout=()=>{
      setLoggedInUser({});
      //sessionStorage.setItem('token','');
    }
    
  useEffect(()=>{
    {
      (!loggedInUser.email &&!loggedInUser.displayName) && isLoggedIn(token);
    }
  },[!loggedInUser.email])
  
  const isLoggedIn = (token) => {
    console.log(token)
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    const { name, email, picture } = decodedToken;
    console.log(decodedToken)
    const signedInUser = {
      displayName: name,
      email: email,
      photo: picture,
      isSignedIn: true,
      error: ''
    }
    setLoggedInUser(signedInUser);
    console.log(loggedInUser,"silvia");
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  }
  
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
                <Link to="/user/bookingList" className=" nav-link">Orders</Link>

                <Link to="/admin" className="nav-link">Admin</Link>
                {loggedInUser.email && (loggedInUser.displayName ? <button className="btn buttonColor me-2  buttonStyleHeader">{loggedInUser.displayName}</button>
                  : <button className="btn  me-2  buttonStyle buttonColor">{loggedInUser.email}</button>)}
  
                {loggedInUser.email ? <button onClick={() => handleLogout()} className="btn buttonColor logStyle  buttonStyleHeader ms-1">Logout</button> :
                  <Link to="/login" className="btn  ms-1 buttonStyleHeader buttonColor">Login</Link>
                }
               
  
              </div>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;