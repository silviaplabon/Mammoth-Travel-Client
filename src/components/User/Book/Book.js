import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import './Book.css'
import SidebarNavbar from '../../Shared/SidebarNavbar/SidebarNavbar';


const Book = () => {
    const { id } = useParams();
    const [service, setService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookData, setBookData] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const { displayName, email } = loggedInUser;
    const [info, setInfo] = useState({});
    const [state, setState] = useState(null);
    const [radio, setRadio] = useState('Credit Card');



    useEffect(() => {
        let url = `https://pacific-mesa-84577.herokuapp.com/service/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => { setService(data); })
    }, [id])

    const handleRadio = e => {
        setRadio(e.target.value);
    }
    const { _id, name, imageURL, description } = service;
    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            displayName: loggedInUser.displayName,
            email: loggedInUser.email,
            book: service,
            PaymentMethod:radio,
            paymentId,
           
            orderTime: new Date(),
            status:'Pending',
        };

        fetch('https://pacific-mesa-84577.herokuapp.com/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your book placed successfully');
                }
            })
    }
    let dataSidebar="Book";
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-4 col-sm-12 pb-5">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="col-md-7  col-sm-12 ms-2 bookSection ">
                <SidebarNavbar dataSidebar={dataSidebar} ></SidebarNavbar>
                    <div className="col-md-7 col-sm-12">

                        <div className="row d-flex ms-1 inputSection">
                            <input name="displayName" className="form-control " placeholder="User Name" defaultValue={displayName} ref={register} disabled />
                            <input name="email" className="form-control " placeholder="email" defaultValue={email} ref={register} disabled />
                            <input name="name" className="form-control " placeholder="Service Name" defaultValue={name} ref={register} disabled />
                        </div>

                        <p>Pay With</p>
                        <input type="radio" onChange={handleRadio} id="male" name="gender" defaultChecked={true} value="Credit Card" />
                        <label for="Credit Card">Credit Card</label>

                        <input type="radio" onChange={handleRadio} id="Paypal" name="gender" value="Paypal" />
                        <label for="Paypal">Paypal</label>
                        <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Book;
// const handleBlur = e => {
//     const newInfo = { ...info };
//     newInfo[e.target.name] = e.target.value;
//     setInfo(newInfo);
// }
// {
//     (loggedInUser.email && loggedInUser.displayName) ? <>
//         <input name="displayName" className="form-control " placeholder="User Name" defaultValue={displayName} ref={register} disabled />
//         <input name="email" className="form-control " placeholder="email" defaultValue={email} ref={register} disabled />
//         <input name="name" className="form-control " placeholder="Service Name" defaultValue={name} ref={register} disabled /></>
//         : <>
//             <input onBlur={handleBlur} name="displayName" className="form-control " placeholder="User Name" defaultValue={displayName} ref={register} />
//             <input onBlur={handleBlur} name="email" className="form-control " placeholder="email" defaultValue={email} ref={register} />
//             <input name="name" className="form-control " defaultValue={name} placeholder="Service Name" ref={register} /></>
// }
// const bookDetails = {
//     displayName:loggedInUser.displayName,
//     email:loggedInUser.email,
//     name:service.name,
//     paymentId,
//     orderTime: new Date()
// };
// const bookDetailsWithjwt={
//     ...info,
//     name:service.name,
//     paymentId,
//     orderTime: new Date()
// }
// let handleData;
// if(state==true){
//   handleData=bookDetails;
// }
// else{
//  handleData=bookDetailsWithjwt;
// }

