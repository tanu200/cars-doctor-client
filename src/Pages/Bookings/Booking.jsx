import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const{user}=useContext(AuthContext);
    const[booking, setBooking]=useState([]);

    const handleDelete=id=>{
        const proceed= confirm("are you sure to delete?")
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE",
            
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deleteCount>0){
                    alert('delete successfully')
                    const remaining= booking.filter(book=> book._id!==id)
                    setBooking(remaining);
                }
            })
        }
    }

    const handleConfirm=id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                //
                const remaining= booking.filter(book=> book._id!==id)
                  const updated= booking.find(book=> book._id===id);
                  updated.status="confirm";
                  const newBooking=[updated, ...remaining];
                  setBooking(newBooking);
            }
        })

    }

    const url =`http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setBooking(data)
        })
    },[url])
    return (
        <div>
            <h2>Your Booking:{booking.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Name</th>
        <th>service</th>
        <th>email</th>
        <th>price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        booking.map(book=><BookingRow key={book._id}
             book={book}
             handleConfirm={handleConfirm}
             handleDelete={handleDelete}></BookingRow>)
    }
     
     
 
     
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default Booking;