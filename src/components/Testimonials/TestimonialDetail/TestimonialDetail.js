import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife} from '@fortawesome/free-solid-svg-icons'
import './TestomonialDetail.css'
const TestimonialDetail = ({testimonial}) => {
   const {name,description,designation}=testimonial;
    return (
        <div  className="col">
        <div  className="card h-100">
          <div  className="card-body">
            <h5  className="card-title">{name}</h5>
            <h6 className="card-title">{designation}</h6>
            <p  className="card-text">{description}</p>
            <FontAwesomeIcon icon={faStar} className="icon me-2" />
            <FontAwesomeIcon icon={faStar} className="icon me-2" />
            <FontAwesomeIcon icon={faStar} className="icon me-2" />
            <FontAwesomeIcon icon={faStar} className="icon me-2" />
            <FontAwesomeIcon icon={faStar} className="icon me-2" />
          </div>
        </div>
      </div>
    
    );
};

export default TestimonialDetail;