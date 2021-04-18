import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
import './ServiceDetail.css'
import { Redirect, useHistory } from 'react-router';
import ManageService from '../../Admin/ManageService/ManageService';
const ServiceDetail = (props) => {
    const {name,imageURL,description,price,_id}=props.service;
    const state=props.state;
    const history=useHistory();
    const handleService=(id)=>{
      history.push(`/user/service/${id}`)
    }
    const handleDelete = (id) => {
          fetch(`http://localhost:4200/delete/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(res => {
                  if (res) {
                    
                  }
              })
  }
    return (
        <div  className="col mt-4">
        <div  className="card h-100 ">
          <img src={imageURL}  className="img-fluid h-75" alt="..."/>
          <div  className="card-body h-25">
            <h5  className="card-title text-center">{name}</h5>
            <p  className="card-text text-center">{description}</p>
          </div>
          <div  className="card-footer d-flex justify-content-between">
            <small  className="text-muted">${price}</small>
            {
               state==true ?
                <FontAwesomeIcon icon={faTrash} className="text-danger cursorIcon" style={{fontSize:'30px'}} onClick={() => handleDelete(_id)} />
                :<button className="btn btn-primary"  onClick={()=>handleService(_id)} >Book</button>
            }

          </div>
        </div>
      </div>
    );
};

export default ServiceDetail;