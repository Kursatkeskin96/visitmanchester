import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './royalexchange.css'

export default function royalexchange() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='royal-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/shopping" onClick={handleLinkClick}>Shopping</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/shopping/royal-exchange" onClick={handleLinkClick}>Royal Exchange</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Shopping in Royal Exchange Manchester</h1>
        <hr></hr>
        <p className='mb-'>The Royal Exchange in Manchester is a historic building that was transformed into a shopping 
        center in the 1990s, offering a unique shopping experience for visitors. The building itself is a stunning example
         of Victorian architecture, and the interior design seamlessly blends the old and the new. 
         <br /><br /> 
         One of the main reasons shopping at the Royal Exchange is awesome is because of the variety of shops available.
          The center features over 30 different stores, including high-end fashion boutiques, artisanal shops, and 
          independent retailers. This diversity means there is something for everyone, whether you're looking for luxury 
          goods or more affordable options.
          <br /><br />
          Another reason to shop at the Royal Exchange is the atmosphere. The center has a cozy and intimate feel, with 
          the shops situated around a central open atrium. The building's architecture provides a unique ambiance that 
          makes shopping here an experience in itself. The atmosphere is perfect for browsing, taking your time, and 
          enjoying the surroundings
          <br /><br />
          In addition to shopping, the Royal Exchange also has several cafes and restaurants, perfect for taking a 
          break and grabbing a bite to eat. These establishments offer a variety of cuisines, from coffee and cakes to 
          light bites and full meals. Whether you're looking for a quick snack or a sit-down meal, the Royal Exchange has 
          got you covered.
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.212498131836!2d-2.2467263847124324!3d53.48253287220337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c1517a6883%3A0xca3549b04cd6c16a!2sRoyal%20Exchange%2C%20Manchester%2C%20Old%20Bank%20St%2C%20Manchester%20M2%207PE!5e0!3m2!1sen!2suk!4v1677677709317!5m2!1sen!2suk"
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
