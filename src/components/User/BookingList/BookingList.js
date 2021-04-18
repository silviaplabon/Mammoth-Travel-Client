import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import BookingDetail from '../BookingDetail/BookingDetail';


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser,"silvia")
    useEffect(() => {
        fetch('http://localhost:4200/userbookings?email='+loggedInUser?.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [loggedInUser.email])
     console.log(bookings)
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 pb-5 mt-2">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-md-7 mt-5">
                <div className="row">
                {
                    bookings.map(booking=><BookingDetail booking={booking}></BookingDetail>)
                }
                 </div>
            </div>
        </div>
        </div>
    );
};

export default BookingList;
{/* <select ref={register} name="category" >
<option value="PopularDrink">PopularDrink</option>
<option value="PopularIngredient">PopularIngredient</option>
<option value="LatestDrink">LatestDrink</option>
<option value="RandomIngredient">RandomIngredient</option>
<option value="RandomDrink">RandomDrink</option>
</select> */}