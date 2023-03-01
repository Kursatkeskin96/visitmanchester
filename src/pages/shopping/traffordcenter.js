import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './traffordcenter.css'

export default function traffordcenter() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='trafford-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/shopping" onClick={handleLinkClick}>Shopping</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/shopping/trafford-center" onClick={handleLinkClick}>Trafford Center</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Shopping in Trafford Center</h1>
        <hr></hr>
        <p className='mb-'>The Trafford Centre have got everyone's favourite brands and some visitors might not have discovered yet 
          including Selfridges, Stradivarius, Pull & Bear, Victoria's Secret, Primark and Khaadi
          <br /><br /> 
          For those who are more of a big day out shopper why not catch the latest blockbuster at ODEON IMAX, 
          go deep underwater at SEA LIFE or explore LEGOLAND® Discovery Centre? Add in Namco Funscape and Laser Quest 
          and visitors will have an action-packed weekend!
          <br /><br />
          And when hunger strikes visitors will be spoilt for choice with over 60 amazing restaurants including new additions 
          Bill's, Five Guys, LEON and wagamama.
          <br /><br />
          Coach groups who pre-book will receive an exclusive book of treats and discounts, and a meet and greet with the
           lovely customer services team. Let The Trafford Centre know if you'd like a behind the scenes guide, or a tour
            customised to your group.
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.1601332644454!2d-2.352459384713161!3d53.46559817347397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487baebb384ea9f1%3A0x64e799934d6c4535!2sThe%20Trafford%20Centre%2C%20Trafford%20Park%2C%20Stretford%2C%20Manchester!5e0!3m2!1sen!2suk!4v1677676215716!5m2!1sen!2suk" 
        width="350" 
        height="225" 
        style={{border:0}} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
    <Footer />
    </div>
  )
}
