import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './FeatureDetail.css'

const FeatureDetail = ({ feature }) => {
    return (
        <li className=" list-group-item  liStyle py-1 px-1">
            <span className="listStyle nameStyle"> <FontAwesomeIcon icon={faCheckCircle} className="checkIcon me-2" style={{color:'#2d524a'}} /> {feature.name}</span>
        </li>
    );
};

export default FeatureDetail;