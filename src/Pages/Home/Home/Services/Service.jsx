import React from 'react';

const Service = ({service}) => {
    const{title,price,img}=service
   
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-orange-600'>Price:$ {price}</p>
    
  </div>
</div>
        </div>
    );
};

export default Service;