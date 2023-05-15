import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login1() {

  useEffect(()=>{
   sessionStorage.clear();
   
  },[])

   const [email,setEmail]=useState('');
   const[password,setPassword]=useState('');

   const usenavigate=useNavigate();
   const handling=(e)=>{
    e.preventDefault();
    if(validate()){
      console.log('proceed');
      fetch('http://localhost:8000/user/' + email).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length === 0) {
           alert('please enter the valid email');
        } else {
          if(resp.password === password){
            alert('success')
              sessionStorage.setItem('email',email)
         
              usenavigate('/')
              window.location.reload();
          }else{
            alert('please enter the valid credentials')
          }
        }
           
        
      }).catch((err)=>{
        alert('login failed due to : '+err.message)
      })
    }
  }
  
  const validate=()=>{
    let result=true;
    if(email ==='' || email === null){
      result=false;
      alert('please enter email');
    }
    if(password ==='' || password===null){
      result=false;
      alert('please enter the password');
    }
    return result;
  }
    

 return (
    <div>
      <div className='d-flex justify-content-center mt-4'>
      <div className="form-container" >
    <p >Login</p>
<form className="form" onSubmit={handling}>
    <label>Email</label>
    <input type="text " className="input" id='email' placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
    <label>Password</label>
    <input type="password" className="input" id='password' placeholder="Password" onChange={e=>setPassword(e.target.value)}/> 
    <button type='submit'>Submit</button>
</form>
</div></div></div>
  )
  }

