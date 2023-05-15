
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Place from './components/Place';
import Rest from './components/Rest';
import Food from './components/Food';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';
import Login1 from './components/Login1';
import Book from './components/Book';
import Bookview from './components/Bookview';
import Contactdetails from './components/Contactdetails';
import Nav from './components/Nav';
import Update from './components/Update';
import Details from './components/Contactview';
import Bookingdetails from './components/Bookingdetails';







let email = sessionStorage.getItem('email');


function App() {
  
 
  
  return (
  <Router>
    
    
 <Nav/>
     <Routes>
       <Route exact path='/' element={<Home />}></Route>
       <Route exact path='/Home' element={<Home />}></Route>
       <Route exact path='About' element={<About />}></Route>
       <Route exact path='Place'element={<Place  />}></Route>
       <Route exact path='Rest' element={<Rest />}></Route>
       <Route exact path='Food' element={<Food />}></Route>
       <Route exact path='Contact' element={<Contact />}></Route>
       <Route exact path='Register' element={<Register />}></Route>
       <Route exact path='Login1'  element={<Login1 />}></Route>
       <Route exact path='Book' element={<Book />}></Route>
       <Route exact path='Bookview' element={<Bookview />}></Route>
{ (email==='premkumaryedida@gmail.com')  &&    <><Route exact path='Contactdetails' element={<Contactdetails />}></Route>
       <Route exact path='Update/:UserId' element={<Update />}></Route>
       <Route exact path='Detail/:UserId' element={<Details />}></Route>
       <Route exact path='Bookingdetails/' element={<Bookingdetails />}></Route></>}
       </Routes>
       <Footer/>
  </Router> 
  );
}

export default App;
