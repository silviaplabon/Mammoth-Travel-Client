import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash} from '@fortawesome/free-solid-svg-icons'

import { Redirect, useHistory } from 'react-router';
import ManageService from '../../Admin/ManageService/ManageService';
import './ServiceDetail.css'
const ServiceDetail = (props) => {
    const {name,imageURL,description,price,_id}=props.service;
    const state=props.state;
    const history=useHistory();
    const handleService=(id)=>{
      history.push(`/user/service/${id}`)
    }
    const handleDelete = (id) => {
          fetch(`https://pacific-mesa-84577.herokuapp.com/delete/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(res => {
                  if (res) {
                    
                  }
              })
  }
    return (
        <div  className="col mt-4 mt-2">
          <div className="card shadow-lg w-100 h-100 text-center rounded ">
                <div className="d-flex justify-content-center align-items-center h-75 ">
                    <img src={imageURL} className="card-img-top h-100 w-100" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold textColor" >$ {price}</h3>
                        {
                            state==true ?
                             <FontAwesomeIcon icon={faTrash} className="text-danger cursorIcon" style={{fontSize:'30px'}} onClick={() => handleDelete(_id)} />
                             :<button className="btn buttonColor text-white"  onClick={()=>handleService(_id)} >Book</button>
                        }
                       
                    </div>
                </div>
            </div>
        
      </div>
    );
};

export default ServiceDetail;


{/* <div  className="card h-100 cardHover">
          <div className="h-75">
          <img src={imageURL}  className="img-fluid h-100 w-100" alt="..."/>
          </div>
          <div  className=" h-25 cardBodyHover">
            <h5  className="card-title text-center nameHover">{name}</h5>
            <p  className="card-text text-center descriptionHover">{description}</p>
          </div>
          <div  className="card-footer  d-flex justify-content-between">
            <small  className="text-muted">${price}</small>
            {
               state==true ?
                <FontAwesomeIcon icon={faTrash} className="text-danger cursorIcon" style={{fontSize:'30px'}} onClick={() => handleDelete(_id)} />
                :<button className="btn btn-primary"  onClick={()=>handleService(_id)} >Book</button>
            }

          </div>
        </div> */}