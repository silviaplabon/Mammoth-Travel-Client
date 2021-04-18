import React from 'react';
import FeatureDetail from '../FeatureDetail/FeatureDetail';
import featureImage from '../../../../images/featureImage.jpg'
import './Feature.css'
const Feature = () => {
    const featureData = [
        {
            name: 'World Travel '
        },
        {
            name: 'First Class Flights '
        },
        {
            name: '5 Star Accommodations'
        },
        {
            name: 'Inclusive Package '
        },
        {
            name: 'Latest Model Vehicles '
        },
        {
            name: 'Best Price Gurantee'
        },
        {
            name: 'Great Experience '
        },
        {
            name: 'Great Travel'
        },
        {
            name: 'Great Experience '
        },
        {
            name: 'Great Travel'
        }
    ]
    return (
        <div className="container">
        <div className="row "> 
         <div className="col-md-6 featureImage mt-5">
               <img src={featureImage} className="img-fluid h-75 w-100"></img>
        </div>
        <div className="featureShow col-md-5 ms-5  ">
        <ul className=" list-group ulStyle mt-5">
            {
                featureData.map(feature=><FeatureDetail feature={feature}></FeatureDetail>)

            }
            </ul>
        </div> 
      
         </div>
         </div>

    );
};

export default Feature;