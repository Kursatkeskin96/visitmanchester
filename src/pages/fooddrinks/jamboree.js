import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer';
import './jamboree.css'

export default function jamboree() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='jamboree-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
      </div>
      </div>
      </div>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item" aria-current="page"><Link to="/foods-and-drinks" onClick={handleLinkClick}>Foods and Drinks</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/foods-and-drinks/jamboree" onClick={handleLinkClick}>Jamboree Restaurant</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Jamboree Restaurant</h1>
        <hr></hr>
        <p>Jamboree is a well-known restaurant in Manchester that offers an exceptional dining 
        experience. From the delicious food to the comfortable atmosphere, there are many reasons why eating at 
        Jamboree is awesome.. 
         <br /><br /> 
         Firstly, the menu at Jamboree is filled with mouth-watering dishes that cater to a wide range of dietary 
         preferences. Whether you are a vegetarian, vegan, or meat lover, you will find something that suits your taste 
         buds. The chefs use high-quality, locally sourced ingredients to create innovative and flavorful dishes that are
        sure to impress.
          <br /><br />
          In addition to the food, Jamboree has a relaxed and welcoming atmosphere that makes it the perfect place to 
          unwind and enjoy a meal. The decor is modern and stylish, with comfortable seating and plenty of natural light. 
          Whether you're there for a romantic dinner, a family meal, or a catch-up with friends, Jamboree offers a 
          comfortable and inviting environment.
          <br /><br />
          Overall, Jamboree is a fantastic restaurant that offers a memorable dining experience. 
          From the delicious food and drinks to the inviting atmosphere, there are many reasons why Jamboree is one of 
          the top restaurants in Manchester.
          </p>
          <h1 className='mt-4'>Location</h1>
        <hr></hr>
          <div className="map-container mt-4 mb-4">
      <iframe 
        title="Trafford Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3310680985073!2d-2.2373426847125466!3d53.480414172362444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bfaac97ae5%3A0x25cf180501e177f!2sJamboree!5e0!3m2!1sen!2suk!4v1677679596451!5m2!1sen!2suk"
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
