import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Contact() {

   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
   const [phone,setPhone]=useState('');

   const navigate=useNavigate();

    const contactproceed= (e)=>{
       
         e.preventDefault();

         let store ={name,message,email,phone};
         fetch('http://localhost:8000/contact',{
          method:("POST"),
        headers:{"content-type":"Application/json"},
        body:JSON.stringify(store)
        }).then((res)=>{
          alert('contact successfull')
         
          navigate('/')
        }).catch((err)=>{
          alert('failed:'+ err.message)
        })
      
      
      
       
    }


  return (
    <div>
    <img src="./images/contact3.jpg" className="d-block w-100  " height={600} alt="..."/>
      
   
    <div class='contact'>
    <div class="contact-form">
 <center> <span class="heading">Contact Us</span></center>
  <form onSubmit={contactproceed}>
    <label for="name">Name:</label>
    <input type="text" required=""  onChange={e=>setName(e.target.value)}/>
    <label for="email">Email:</label>
    <input type="email" id="id " name="email" required=""  onChange={e=>setEmail(e.target.value)}/>
    <label for="email">Phone:</label>
    <input type="phone " id="phone" name="phone" required=""  onChange={e=>setPhone(e.target.value)}/>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required=""class="form-control"  onChange={e=>setMessage(e.target.value)}></textarea>
    <button type="submit">Submit</button>
  </form>
</div></div>
</div>
  )
}
