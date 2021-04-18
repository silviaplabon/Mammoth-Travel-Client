import React from 'react';

const BookingDetail = ({booking}) => {
    const {name,imageURL,description,price}=booking.book;
    const {orderTime,status}=booking;
    return (
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 h-100">
            <img src={imageURL} alt="..." className="img-fluid h-100 w-100"/>
          </div>
          <div className="col-md-7 ">
            <div className="card-body d-flex justify-content-between align-items-between">
              <h6 className="card-title pt-2">{name}</h6>
              {status ?<h6 className="btn">{status}</h6>:<h6 className="btn">Pending</h6>}
            </div>
            <div className="ms-2">
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookingDetail;