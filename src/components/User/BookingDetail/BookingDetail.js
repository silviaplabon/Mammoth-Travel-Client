import React from 'react';

const BookingDetail = ({booking}) => {
    const {name,imageURL,description,price}=booking.book;
    const {orderTime,status}=booking;
    return (
      <div className="mb-3 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="d-flex justify-content-between align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top w-25" />
                    <p className="btn btn-primary">{status}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                
            </div>
        </div>
      
    );
};

export default BookingDetail;