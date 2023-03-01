import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './arndale.css'

export default function arndale() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='arndale-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/shopping" onClick={handleLinkClick}>Shopping</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/shopping/arndale" onClick={handleLinkClick}>Arndale</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Shopping in Arndale Manchester</h1>
        <hr></hr>
        <p className='mb-'>Arndale Manchester is a world-famous shopping center located in the heart of Manchester city 
        center. It is one of the largest indoor shopping centers in the UK, and it attracts millions of visitors every year.
          <br /><br /> 
          One of the reasons why shopping in Arndale Manchester is awesome is the sheer variety of shops that it offers. 
          With over 200 stores, including high-end luxury brands, department stores, independent boutiques, and well-known 
          high-street retailers, there's something for everyone at Arndale Manchester. From designer clothes to affordable 
          fashion, from cutting-edge technology to artisanal crafts, shoppers can find a vast array of goods and services at 
          this shopping mecca.
          <br /><br />
          Another reason why Arndale Manchester is such an amazing shopping destination is the shopping experience itself. 
          The center is spacious and modern, with an open-plan design that is both welcoming and easy to navigate. Visitors 
          can enjoy the vibrant atmosphere and the buzz of shoppers and retailers, while taking advantage of the center's many 
          amenities, including free Wi-Fi, children's play areas, and plenty of places to eat and drink.
          <br /><br />
          Overall, shopping in Arndale Manchester is a truly awesome experience. With its unbeatable selection of stores, 
          fantastic shopping experience, and convenient location, it's no wonder why it's one of the UK's most popular 
          shopping destinations.
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1622347312555!2d-2.2415316!3d53.483430999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0d303bc9b%3A0xdac4431478cbbe4d!2sThe%20Arndale%20Shopping%20Center%2C%20Manchester%20M4%203AQ!5e0!3m2!1sen!2suk!4v1677677270311!5m2!1sen!2suk"
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
