import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './gaucho.css'

export default function gacuho() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='gaucho-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/foods-and-drinks" onClick={handleLinkClick}>Foods and Drinks</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/foods-and-drinks/gaucho" onClick={handleLinkClick}>Gaucho Restaurant</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Gaucho Restaurant</h1>
        <hr></hr>
        <p>Gaucho is a well-known Argentine restaurant chain that has made a name for itself in 
        Manchester. The restaurant serves up some of the best steaks in the city, and it's not just the quality of the
         meat that makes the experience so special.
         <br /><br /> 
         Firstly, Gaucho Manchester's atmosphere is one of luxury and sophistication. The restaurant's interior is 
         modern and stylish, with low lighting and sleek furnishings that create a warm and intimate ambiance. Whether 
         you're on a romantic date or celebrating a special occasion, Gaucho provides the perfect setting to enjoy a 
         delicious meal.
          <br /><br />
          When it comes to the food, Gaucho Manchester sources only the best quality meat from Argentina. 
          The steaks are cooked to perfection, with a range of cuts available to suit every taste. The restaurant's 
          signature dish is the Churrasco de Lomo, a succulent fillet of beef that's cooked on the grill and served 
          with a range of delicious sides.
          <br /><br />
          Overall, eating at Gaucho Manchester is an experience that's not to be missed. From the luxurious atmosphere 
          to the delicious food and excellent wine, it's the perfect place to indulge in a little bit of Argentine luxury 
          in the heart of Manchester.
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.230516060973!2d-2.251801876073746!3d53.482210917652274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c39aaf7e7b%3A0x1166289e482f3bb3!2sGaucho%20Manchester!5e0!3m2!1sen!2suk!4v1677679969364!5m2!1sen!2suk"
        width="350" 
        height="225" 
        style={{border:0}} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
 
      </iframe>
       </div>
    </div>
    <Footer />
    </div>
  )
}
