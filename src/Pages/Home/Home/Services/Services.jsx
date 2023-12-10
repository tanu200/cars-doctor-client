import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const[services, setServices]=useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then( data => setServices(data));
    },[])
   

  
    return (
        <div>
          <div className='text-center space-y-3 mt-10'>
            <h4 className='text-xl text-orange-600 font-bold'>Service</h4>
          <h1 className='text-4xl  font-bold'>Our Service Area</h1>
          <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
          </div>
          <div className='grid grid-cols-1 grid-cols-3 gap-6 space-y-4 mt-10'>
           {
            services.map(service =><Service key={service._key}
                 service={service}>

                 </Service>)
           }
          </div>
        </div>
    );
};

export default Services;