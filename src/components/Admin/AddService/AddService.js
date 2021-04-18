import React, { useState,useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log(watch("example")); // watch input value by passing the name of it
    const onSubmit = data => {
      const productData = {
        name: data.name,
        imageURL: imageURL,
        description:data.description,
        price:data.price
      };
      const url = `http://localhost:4200/addServices`;

      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
        .then(res => console.log('server side response', res))
    };
  
    const handleImageUpload = event => {
      console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key', 'b9c8c292069e10110cf7af6edcbd15eb');
      imageData.append('image', event.target.files[0]);
  
      axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
      <div className="container ">
        <div className="row">

      <div className="col-md-4  pb-5">
            <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-8">
           <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle">
          <div className="row d-flex">
            <div className="col-md-5">
              <label for="servicename">Service Title</label>
              <input name="name" id="servicename" className="form-control " defaultValue="" ref={register} />
              <label for="description" className="mt-2">Description</label>
              <input name="description" id="description" className="form-control " defaultValue="" ref={register} />
            </div>
            <div className="col-md-5 ms-2">
              <label for="productImg" className="mt-2">Add Photo</label>
              <input name="image" type="file" id="productImg" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
              <label for="price" className="mt-2">Add Price</label>
              <input name="price" id="price" className="form-control " defaultValue="" ref={register} />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <input type="submit" className="mt-3 btn btn-primary" value="Save" />
          </div>
        </form>
        </div>
        </div>
         </div>
    );
};

export default AddService;