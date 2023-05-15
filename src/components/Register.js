import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const [username,setUsername]= useState();
  const [id,setId]= useState();
  const [password,setPassword]= useState();
  const [confirm,setConfirm]= useState();

  const navigate=useNavigate();

  const handlesubmit=(e) =>{
    e.preventDefault();

    let store={username,id,password,confirm};

    fetch("http://localhost:8000/user",{
        method:"POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify(store)
    }).then((res)=>{
        alert("Registeration successful.")
        navigate('/Login1');
    }).catch((err)=>{
        alert("failed : " + err.message);
      });  
      
    
    }
   
    
  return (

   <div className='d-flex justify-content-center'>
        <div className="card">
    <div className="card-header">
      <div className="text-header">Register</div>
    </div>
    <div className="card-body">
      <form action="#" onSubmit={handlesubmit}>
        <div className="form-group">
          <label for="username">Username:</label>
          <input required className="form-control" name="username" id="username" type="text" onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input required className="form-control" name="email" id="email" type="email" onChange={e=>setId(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input required className="form-control" name="password" id="password" type="password"onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="confirm-password">Confirm Password:</label>
          <input required className="form-control" name="confirm-password" id="confirm-password" type="password"onChange={e=>setConfirm(e.target.value)}/>
        </div>
       <input type="submit" className="btn1" value="submit" style={{textAlign:'left'}}/>    </form>
    </div>
  </div>
  </div>
  )
}
