import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
    const service= useLoaderData();
    const{title, _id, price,img}=service;

    const {user}=useContext(AuthContext)
    const BookedService=e=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const date= form.date.value;
        const email= form.email.value;
        const amount= form.amount.value;
        const booking={
            name,
            date,
            img,
            email,
            amount,
            service:title,
            service_id: _id,
            price: price,
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
       .then(data =>{
        console.log(data);
       if(data.insertedId){
        alert('data inserted')
       }
       })
    }
    return (
        <div>
            <h1>CheackOut Now:{title}</h1>
          
      <form onSubmit={BookedService} className="card-body">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name"  className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
        
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="text" defaultValue={user?.email} placeholder="Email Address" name="email" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dua Amount</span>
          </label>
          <input type="text" defaultValue={'$'+ price} name="amount" className="input input-bordered" required />
        
        </div>
   </div>
        <div className="form-control mt-6">
       
          <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
 
    );
};

export default Checkout;