import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function footer() {
   const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
    <ul>
    <li><Link to="/" onClick={handleLinkClick} className="nav-link">Home</Link></li>
    <li><Link to="/shopping/trafford-center" onClick={handleLinkClick} className="nav-link">Trafford Center</Link></li>
    <li><Link to="/food-and-drinks/hard-rock-cafe" onClick={handleLinkClick} className="nav-link">Hard Rock Cafe</Link></li>
    <li><Link to="/shopping" onClick={handleLinkClick} className="nav-link">Shopping</Link></li>
    <li><Link to="/shopping/arndale" onClick={handleLinkClick} className="nav-link">Arndale</Link></li>
    <li><Link to="/food-and-drinks/gaucho" onClick={handleLinkClick} className="nav-link">Gaucho Restaurant</Link></li>
    <li><Link to="/food-and-drinks" onClick={handleLinkClick} className="nav-link">Food and Drinks</Link></li>
    <li><Link to="/shopping/royal-exchange" onClick={handleLinkClick} className="nav-link">Royal Exchange</Link></li>
    <li><Link to="/food-and-drinks/jamboree" onClick={handleLinkClick} className="nav-link">Jamboree Restaurant</Link></li>
  </ul>
  <div className="icon-container mt-5">
        <a href="https://www.facebook.com"><BsFacebook /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
        <a href="https://www.instagram.com"><BsInstagram /></a>
      </div>
    </div>
  )
}

export default footer;