import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function Book() {

 const [username,setUsername]=useState('');
 
 const [id,setId]=useState('');
 
 const [phone,setPhone]=useState('');
 
 const [adult,setAdult]=useState('');

 
 const [child,setChild]=useState('');
 
 const [start,setStart]=useState('');
 
 const [end,setEnd]=useState('');

 const [room,setRoom]=useState('');

 const [message,setMessage]=useState('');

 const update =useState(Math.floor(Math.random() * (9999999 - 1111111)));

 const navigate=useNavigate();

const bookproceed =(e)=>{
  e.preventDefault();

  let store={username,id,phone,adult,child,start,end,room,message,update}

  fetch('http://localhost:8000/ticket',{
    method:("POST"),
  headers:{"content-type":"Application/json"},
  body:JSON.stringify(store)
  }).then((res)=>{
    alert('Booking successfull')
    sessionStorage.setItem("id",id);
    navigate('/Bookview')
  }).catch((err)=>{
    alert('failed:'+ err.message)
  })
}



  return (
  <div className='d-flex justify-content-center'>
<div className="card">
    <div className="card-header">
      <div className="text-header">Booking Ticket</div>
    </div>
    <div className="card-body">
      <form action="#" onSubmit={bookproceed} >
        <div className="form-group">
          <label for="username">Your Name:</label>
          <input required className="form-control" name="username" id="username" type="text" onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="email">Your Email:</label>
          <input required className="form-control" name="email" id="email" type="email" onChange={e=>setId(e.target.value)} />
        </div>
        <div className="form-group">
          <label for="password">your Phone</label>
          <input required className="form-control" name="phone" id="phone" type="phone"  onChange={e=>setPhone(e.target.value)}  />
        </div>
        <div className="form-group">
        <label for="adult">Adults</label>
         <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required  onChange={e=>setAdult(e.target.value)} /> 
        </div>
        <div className="form-group">
        <label for="adult">child</label>
         <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required  onChange={e=>setChild(e.target.value)}/> 
        </div>
        <div className="form-group">
        <label for="checkin-date">Start-in Date</label>
         <input type="date" id="start" name="checkin" required  onChange={e=>setStart(e.target.value)} />
         </div>

         <div className="form-group">
        <label for="checkin-date">End-in Date</label>
         <input type="date" id="end" name="checkin" required  onChange={e=>setEnd(e.target.value)}/>
         </div>
         <div className="form-group">
         <label for="room-selection">Select </label>
    <select id="room" name="room_preference" required  onChange={e=>setRoom(e.target.value)}>
        <option value="">Choose a destinations from the List</option>
      <option value="connecting">East & West Godavari</option>
        <option value="adjoining">Vizag places</option>
        <option value="adjacent">Vizawada</option>
    </select>
    <div className="form-group">
    <label for="message">Anything Else?</label>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required  onChange={e=>setMessage(e.target.value)}></textarea>
         </div>

         </div>



       <input type="submit" className="btn1 " value="submit"/>    </form>
    </div>
  </div>

    </div>
  )
}
