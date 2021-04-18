import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#2d524a", color: "white", marginTop: "8%" }}
    >
      <div className="container pt-5">
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="col-md-4">
            <h3>Save On Plans!</h3>
            <div className="pt-2">
              <p>
              You can choose your favorite destination and start planning your long-awaited vacation. 
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Travel Specialist</h3>
            <div className="pt-2">
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li>Golf Vacations</li>
                <li>Disney Parks Vacations</li>
                <li>Vacations as Advertised</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <div className="pt-2">
              <p style={{ margin: "0" }}>55-5698-4589</p>
              <p style={{ margin: "0" }}>mammothtravel@gmail.com</p>
              <p style={{ margin: "0" }}>Chittagong, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="row mt-3 text-center" style={{ color: "gray" }}>
          <p>2021 &#169; MammothTravel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;