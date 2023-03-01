import React from 'react'
import './foods.css'
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food2.jpg'
import food3 from '../../images/food3.jpg';
import { Link } from 'react-router-dom';


 function foods() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='container mt-5'>
        <div>
        <h1>Foods and drinks in Manchester</h1>
        <hr></hr>
        <p>
        Manchester's food and drink culture is thriving. With new restaurants, bars, gastropubs, 
        micro breweries and cafes opening weekly, the city is establishing itself as one of the UK's most 
        exciting foodie destinations.  
        <br /><br />
        From fine dining and afternoon tea to pop-up markets and humble street food, 
        Greater Manchester is packed with options to suit any mood offering any and every cuisine you can think of. 
        Why not try foodie destination, the Corn Exchange, or experience contemporary pub, The Pilcrow at Sadler's Yard. 
        Experience local produce or one of Greater Manchester's independent and quirky coffee shops. 
        This city is a haven for vegan and vegetarian cuisine, and is fit to burst with a number of halal options too.
        </p>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Link to="/foods-and-drinks/hard-rock-cafe" onClick={handleLinkClick}><img src={food1} className="d-block w-100" alt="..."></img></Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Manchester Hard Rock Cafe</h5>
        <p>Experience authentic American dining and the true spirit of rock n' roll at Hard Rock Cafe Manchester.</p>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/foods-and-drinks/jamboree" onClick={handleLinkClick}><img src={food2} className="d-block w-100" alt="..."></img></Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Jamboree Foodfest & Bar Manchester</h5>
        <p>A Celebration of food inspired by flavours from around the world.</p>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/foods-and-drinks/gaucho" onClick={handleLinkClick}><img src={food3} className="d-block w-100" alt="..."></img></Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Gaucho Manchester</h5>
        <p>Discover the best steak restaurant in Manchester, for premium Argentinian steaks and wines.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
  )
}

export default foods;