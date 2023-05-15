import React, { useState } from 'react'
import {useEffect  } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Details() {
    
const {UserId} = useParams();

    const[details,setDetails]=useState({});
        
    useEffect(()=>{

      fetch('http://localhost:8000/Contact/'+ UserId).then((res)=>{

      return res.json();

      }).then((resp)=>{

        setDetails(resp);
  
      }).catch((err)=>{

         alert('View Ticket failed due to:' + err.message);
      },[])
    })
  
   return (
      <div className='container-fluid'>
      <div className='row'>
          <div className='col-4'></div>
      {
      <div class="col-4 m-4 card ">
      <div class="card-body">
        <h3>Contact Details</h3>
          <h5 class="card-title">Name : {details.username}</h5>
          <h5 class="card-subtitle mb-2 ">Email : {details.id} </h5>
          <h5 class="card-subtitle mb-2 ">Phone : {details.phone}</h5>
          
        
          
          <h5 class="card-subtitle mb-2">Message: {details.end}</h5>
          <p class="card-text"><b></b> </p>

          <Link className='btn btn-danger' name='button' to={"/Contactdetails"}>Back</Link>
       
      </div>
      </div>
      }</div></div>
  )
}
