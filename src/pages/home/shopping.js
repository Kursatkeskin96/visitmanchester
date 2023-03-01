import React from 'react'
import './shopping.css';
import traffordCenter from '../../images/trafford-center.jpg';
import Arndale from '../../images/arndale.jpg';
import royalExchange from '../../images/royal-exchange.jpg';
import { Link } from 'react-router-dom';



 function shopping() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    
<div className="container">
      <div className='shopping d-flex flex-column align-items-center'>
        <div className="m-auto d-flex flex-column align-items-center">
        <h1 className="h text-white">Shopping in Manchester</h1>
        <hr className='purplehr'></hr>
        <p className="p text-white">Shopping in Manchester is well worth more than one day's attention.</p>
        <Link to="/shopping" onClick={handleLinkClick}><button type="button" class="btn btn-danger mt-3">See More</button></Link>
      </div>
      </div>

  <div className='card-container'>
  <div className="card">
  <img src={traffordCenter} className="card-img-top" alt="Trafford Center" />
  <div className="card-body">
    <h5 className="card-title">Trafford Center</h5>
    <p className="card-text">Discover the best shopping experience in Manchester at the Trafford Center.</p>
    <Link to="/shopping/trafford-center" onClick={handleLinkClick}><button type="button" className="btn btn-danger">Visit</button></Link>
  </div>
  </div>
  <div className="card">
  <img src={Arndale} className="card-img-top" alt="Trafford Center" />
  <div className="card-body">
    <h5 className="card-title">Manchester Arndale</h5>
    <p className="card-text">Manchester Arndale is the Manchester city centre shopping centre!</p>
    <Link to="/shopping/arndale" onClick={handleLinkClick}><button type="button" className="btn btn-danger">Visit</button></Link>
  </div>
  </div>
  <div className="card">
  <img src={royalExchange} className="card-img-top" alt="Trafford Center" />
  <div className="card-body">
    <h5 className="card-title">The Royal Exchange</h5>
    <p className="card-text">Whether it's designer fashion, beauty or gifts, this place has it all on one level.</p>
    <Link to="/shopping/royal-exchange" onClick={handleLinkClick}><button type="button" className="btn btn-danger">Visit</button></Link>
  </div>
  </div>
  </div>

  </div>

  )
}
export default shopping;