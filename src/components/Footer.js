import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div class="container1">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <Link to="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </Link>
      <div class='pad'>
      <p class="text-body-secondary">   CONNECT WITH RAJAHMUNDRY TOURISM</p>
    
            
                    <i class="fa-brands fa-facebook"></i>
                            
                                <i class="fa-brands fa-linkedin"></i>
                             
                            
                                <i class="fa-brands fa-youtube"></i>
                            
                                
                                <i class="fa-brands fa-twitter"></i>
                            
                              
                                <i class="fa-brands fa-square-instagram"></i><br />

                                This website was last updated on April 26, 2023.<br />
                                VISITOR COUNT : 488630</div></div>

    

    <div class="col mb-3">

    </div>

<div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-body-secondary">Home</Link></li>
        <li class="nav-item mb-2"><Link to="About" class="nav-link p-0 text-body-secondary">About</Link></li>
        <li cla    ss="nav-item mb-2"><Link to="Rest" class="nav-link p-0 text-body-secondary">Hotel</Link></li>
        <li class="nav-item mb-2"><Link to="Place" class="nav-link p-0 text-body-secondary">Place</Link></li>
        <li class="nav-item mb-2"><Link to="Contact" class="nav-link p-0 text-body-secondary">Contact</Link></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-body-secondary">Terms and Conditions </Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-body-secondary">Hyperlinking Policy</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-body-secondary">Copyright Policy</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-body-secondary">Refund Policy</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-body-secondary">Disclaimer</Link></li>
      </ul>
    </div>

    
  </footer>
</div>
  )
}

export default Footer