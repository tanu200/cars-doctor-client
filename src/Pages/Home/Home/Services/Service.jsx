import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{_id,title,price,img}=service
   
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-orange-600'>Price:$ {price}</p>
  <Link to={`/checkout/${_id}`}>  <button className='bg-orange-700 text-white p-2 rounded-xl'>BOOK NOW</button></Link>
    
  </div>
</div>
        </div>
    );
};

export default Service;