import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

export default function Home() {
  return (
    <div><div id="carouselExampleDark" className="carousel carousel-dark slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="./images/rjy1.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Rajahmundry Havelock Bridge</h5>
          <p class="p2">The Old Godavari Bridge (also known as The Havelock Bridge) is a decommissioned bridge that spans the Godavari River in Andhra Pradesh, India.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="./images/riverboat.jpeg" className="d-block w-100" alt="..."  />
        <div className="carousel-caption d-none d-md-block">
          <h5>Godavari Nature</h5>
          <p class="p2">A river cuts through rock, not because of its power, but because of its persistence..</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/rjy2.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hills Station</h5>
          <p class="p2">The river moves, but it follows a path. When it tires of one journey, it rubs through some rock to forge a new way. Hard work, but that's its nature.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/rjy4.jpeg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Railway Transportation through the bridge</h5>
          <p class="p2">such a rare case of the Rajahmundry 4 modes of transportation.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


  <h1>Rajahmundry Tourism Expolore</h1>

  <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-3  py-3">
      <div class="col">
        <div class="card1 card-cover  polavaram" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h5 class=" mb-4 display-6 lh-1 fw-bold">polavaram Project</h5>
           
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card1 card-cover h-100  papi1" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h5 class=" mb-4 display-6 lh-1 fw-bold">Beatiful hills in papi hills</h5>
           
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card1 card-cover h-100  tem">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h5 class=" mb-4 display-6 lh-1 fw-bold">St.Luthurn Church </h5>
            
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch">
      <div class="col">
        <div class="card1 card-cover   god" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h5 class="mb-4 display-6 lh-1 fw-bold">Havlock Bridege NTR statue</h5>
            
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card1 card-cover h-100  boat" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h5 class=" mb-4 display-6 lh-1 fw-bold">Beautiful; hills in papi hills</h5>
           
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card1 card-cover h-100  ghat1">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h5 class="mb-4 display-6 lh-1 fw-bold">Gowthami Ghat</h5>
            
          </div>
        </div>
      </div>
    </div>

         <h1>Rajahamundry Discover</h1>
         <p class='p1'>Discover Goa as never before. Your travel plan starts here.</p>
    <table className='text-center w-100'>
 
    <tr >
      <td colSpan={'2'}><img src='./images/fam.jpeg' alt='..' height={'500px'} width={'100%'}/></td> 
      
      <td rowSpan={'2'}><img src='./images/alone.jpeg' alt='..' height={'1000px'} width={'100%'}/></td>
    </tr>
    <tr>
      <td><img src='./images/couple.jpg' alt='..' width={'100%'} height={'500px'}/></td>
      <td><img src='./images/frnds.jpg' alt='..' width={'100%'} height={'500px'}/></td>
    </tr>
    

</table>
    

<h1>Rajahmundry Inspires</h1>
<p class="p1">A picture can speak the unspoken, unearth the hidden or hold memories for life.</p>
<div class="images d-flex justify-content-evenly">
    <div class="img img1"><h6>Culture</h6></div>
    <div class="img img2"><h6>Temples</h6></div>
    <div class="img img3"><h6>Churches</h6></div>
    {/* <div class="img img4"><h6>Greenery </h6></div> */}
    <div class="img img5"><h6>Festivals</h6></div>
    <div class="img img6"><h6>Mountains</h6></div>
    <div class="img img7"><h6>Agriculture</h6></div>
</div>
<div class="images d-flex justify-content-evenly">
    <div class="img img8"><h6>Agency Areas</h6></div>
    <div class="img img9"><h6>Trees</h6></div>
    {/* <div class="img img10"><h6>Birds</h6></div> */}
    <div class="img img11"><h6>Ayurvedic</h6></div>
    <div class="img img12"><h6>Clothing</h6></div>
    <div class="img img13"><h6>Ghats</h6></div>
    <div class="img img14"><h6>Boating</h6></div>
</div>
  </div>
  )
}
