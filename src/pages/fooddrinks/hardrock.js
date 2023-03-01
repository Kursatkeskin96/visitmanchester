import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './hardrock.css'

export default function hardrock() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='hard-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/foods-and-drinks" onClick={handleLinkClick} >Foods and Drinks</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/foods-and-drinks/hard-rock-cafe" onClick={handleLinkClick}>Hard Rock Cafe</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Hard Rock Cafe</h1>
        <hr></hr>
        <p>Hard Rock Cafe is an iconic restaurant chain that has been serving great food for over 50 
        years. With its unique blend of classic American cuisine and rock and roll culture, Hard Rock Cafe Manchester 
        is the perfect spot for those who love good food and great music. 
         <br /><br /> 
         One of the main reasons why eating at Hard Rock Cafe Manchester is awesome is the quality of the food. 
         The menu is packed with classic American dishes like burgers, ribs, and steak, as well as some unique offerings 
         like the Twisted Mac & Cheese, which is macaroni and cheese with a crispy bread crumb topping. The portions are 
         generous, and the food is always fresh and delicious.
          <br /><br />
          In addition to the food, Hard Rock Cafe Manchester has a great atmosphere. The walls are lined with memorabilia
           from some of the biggest names in rock and roll, and the music is always cranked up to the perfect volume. 
           It's the perfect place to enjoy a meal with friends or family, or to grab a drink after a show at one of the 
           nearby venues.
          <br /><br />
          Overall, eating at Hard Rock Cafe Manchester is an awesome experience that you won't want to miss. 
          From the delicious food to the rock and roll atmosphere to the great service, it's the perfect spot for 
          anyone who loves good food and great music
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0742727234983!2d-2.2455623760727765!3d53.485002717444345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b023a63963cad%3A0x917011e15b32991f!2sHard%20Rock%20Cafe!5e0!3m2!1sen!2suk!4v1677678985440!5m2!1sen!2suk"
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
