import React from 'react';

const BookingRow = ({book, handleDelete,handleConfirm}) => {
    const{_id,name,email,service,date,price,img,status }=book;
   
    return (
        <div>
             <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div >
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{date}</div>
            </div>
          </div>
        </td>
        <td>
          {service}
        </td>
        <td>{email}</td>
        <td>{price}</td>
        <th>
      {status==='confirm'?<span className='text-purple-700 font-bold'>Confirm</span>:
            <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
      }
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;