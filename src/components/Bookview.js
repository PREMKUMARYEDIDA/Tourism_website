import React, { useEffect, useState } from 'react'




export default function Bookview() {

const id = sessionStorage.getItem("id");

  const[bookview,setBookview]=useState({});
  useEffect(()=>{
    fetch('http://localhost:8000/ticket/'+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      setBookview(resp);

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
      <h3>Booked Ticket</h3>
        <h5 class="card-title">Name : {bookview.username}</h5>
        <h5 class="card-subtitle mb-2 ">Email : {bookview.id} </h5>
        <h5 class="card-subtitle mb-2 ">Phone : {bookview.phone}</h5>
        <h5 class="card-subtitle mb-2">Adults : {bookview.adult}</h5>
        <h5 class="card-subtitle mb-2">Childs: {bookview.child}</h5>
      
        <h5 class="card-subtitle mb-2">Start-in Date: {bookview.start}</h5>
        <h5 class="card-subtitle mb-2">End-in Date: {bookview.end}</h5>
        <p class="card-text"><b></b> </p>
        <p><b>Ticket id :{bookview.update}</b></p>
    </div>
    </div>
    }</div>
</div> 
  )
}
