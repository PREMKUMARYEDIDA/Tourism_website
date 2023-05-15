import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Update() {
  const {UserId} = useParams()
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
   const [phone,setPhone]=useState('');

  useEffect(()=>{
    fetch("http://localhost:8000/Contact/"+UserId).then((res)=>{
        return res.json();
    }).then((resp)=>{
      setName(resp.name);
      setEmail(resp.email);
      setMessage(resp.message);
      setPhone(resp.phone);
    }).catch((err)=>{
        alert("Userdetails Failed due to : " + err.message)
    })
},[]);
  

   const navigate=useNavigate();

    const contactproceed= (e)=>{
       
         e.preventDefault();

         let store ={name,message,email,phone};
         fetch('http://localhost:8000/contact/'+UserId,{
          method:("PUT"),
        headers:{"content-type":"Application/json"},
        body:JSON.stringify(store)
        }).then((res)=>{
          alert('updated successfull')
      
          navigate('/Contactdetails')
        }).catch((err)=>{
          alert('failed:'+ err.message)
        })
      
      
      
       
    }


  return (
    <div>
    <img src="./images/contact3.jpg" className="d-block w-100" alt="..."/>
      
   
    <div class='contact'>
    <div class="contact-form">
 <center> <span class="heading">Update</span></center>
  <form onSubmit={contactproceed}>
    <label for="name">Name:</label>
    <input type="text" required=""  onChange={e=>setName(e.target.value)} value={name}/>
    <label for="email">Email:</label>
    <input type="email" id="id " name="email" required=""  onChange={e=>setEmail(e.target.value)} value={email}/>
    <label for="email">Phone:</label>
    <input type="phone " id="phone" name="phone" required=""  onChange={e=>setPhone(e.target.value)} value={phone}/>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required=""class="form-control"  onChange={e=>setMessage(e.target.value)} value={message}></textarea>
    <button type="submit">Submit</button>
    <Link className='btn btn-danger' name='button' to={"/Contactdetails"}>Back</Link>
  </form>
</div></div>
</div>
  )
}
