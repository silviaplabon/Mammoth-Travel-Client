import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import BookingDetail from '../BookingDetail/BookingDetail';


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser,"silvia")
    const [spinner,setSpinner]=useState(true);
;    useEffect(() => {
        fetch('https://pacific-mesa-84577.herokuapp.com/userbookings?email='+loggedInUser?.email,
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
                setSpinner(false)
            })
    }, [loggedInUser.email])
     let dataSidebar="Booking List";

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 pb-5 ">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-md-7 ">
                {
                        spinner &&
                        <div className="text-center">
                            <div class="spinner-grow  mt-5" role="status" style={{ width: '2rem',color:'#2d524a', height: '2rem' }}>
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>
                <div className="row mt-5">
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