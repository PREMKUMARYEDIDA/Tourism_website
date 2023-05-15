import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

let email= sessionStorage.getItem('email');
export default function Nav() {
    const navigate=useNavigate(); 
  const reload=()=>{
    sessionStorage.clear();
        navigate("/");
    window.location.reload();

  }
  
  return (
<div className='sticky-top'>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
      
      <img src="./images/rjylogo.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="120px" height="80px" loading="lazy" />
    
      </div>


      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="Home" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="About" className="nav-link px-2">About</Link></li>
        <li><Link to="Place" className="nav-link px-2">Place </Link></li>
        <li><Link to="Rest" className="nav-link px-2">Hotels</Link></li>
        <li><Link to="Food" className="nav-link px-2">Food</Link></li>
       <li><Link to="Contact" className="nav-link px-2">Contact Us</Link></li>
      
       {(email === "premkumaryedida@gmail.com") && <div className="dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fa-solid fa-user " ></i>
              Admin
            </Link>

            <ul className="dropdown-menu">
            
              <li><Link className="dropdown-item" to="/ContactDetails">Contact Details</Link></li>
              <li><Link className="dropdown-item" to="/BookingDetails">Booking Details</Link></li>
              
            </ul>
          </div>}

      </ul>

      <div className="col-md-3 text-end">
      {(email !== null) && <><Link to="Book" className="btn btn-success me-2">Booking Tickets </Link>
                            <Link className="btn btn-primary " onClick={reload} > Log Out</Link></> }
    {(email === null) && <><Link to="Login1" ><button type="button" className="btn btn-primary "  > Login</button></Link> 
       <Link to="Register"  ><button type="button" className="btn btn-primary">Sign-up</button></Link> </>}
      </div>
    </header></div>

  )
}
