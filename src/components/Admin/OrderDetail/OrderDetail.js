import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const OrderDetail = ({ booking }) => {

    const { name } = booking.book;
    const { displayName, email, PaymentMethod, _id,status } = booking;
    const { register, handleSubmit, watch, errors } = useForm();

    const [book, setBook] = useState({})
 
    const handleChange = e => {
        const bookDetails = {
           status:e.target.value
        };
        console.log(bookDetails)
           fetch(`https://pacific-mesa-84577.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('updated this product')
                }
            })

    }
    console.log(book)
    return (
    
            <tbody>
            <tr>
                <td className="fontOrderStyle pe-1">{displayName}</td>
                <td className="fontOrderStyle">{email}</td>
                <td className="fontOrderStyle">{PaymentMethod}</td>
                <td className="fontOrderStyle">{name}</td>
                <td className="fontOrderStyle">
                <select name="status" onChange={handleChange}>
                            {
                              status=="Pending" &&<>
                               <option>Pending</option>
                            <option>On Going</option>
                            <option>Done</option>
                              </>
                            }
                             {
                              status=="Done" &&<>
                              <option>Done</option>
                              <option>On Going</option>
                              <option>Pending</option>
                              </>
                            }
                             {
                              status=="On Going" &&<> <option>On Going</option>
                               <option>Pending</option>
                            <option>Done</option>
                              </>
                            }
                           
                        </select>
                </td>
            </tr>
        </tbody>
                       
              
    );
};

export default OrderDetail;
{/* <ul className="list-group ulOrderStyle">
                <li className="list-group-item  liStyleOrder">
                    <span className=" listStyleOrder ms-1 nameStyle">{displayName}</span>
                    <span className=" listStyleOrder ms-1 emailStyle ">{email}</span>
                    <span className="listStyleOrder ms-1 serviceStyle text-center">{name}</span>
                    <span className="listStyleOrder ms-1 payStyle">{radio}</span>
                    <span className="listStyleOrder  "></span> */}
