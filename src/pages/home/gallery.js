import React from 'react'
import manch1 from '../../images/manch1.jpg'
import manch2 from '../../images/manch2.jpg'
import manch3 from '../../images/manch3.jpg'
import manch4 from '../../images/manch4.jpg'
import manch5 from '../../images/manch5.jpg'
import manch6 from '../../images/manch6.jpg'
import manch7 from '../../images/manch7.jpg'
import manch8 from '../../images/manch8.jpg'
import manch9 from '../../images/manch9.jpg'
import './gallery.css';

function gallery() {
  return (
    <div className='container'>
    <h1>Gallery</h1>
        <hr></hr>
        <div className='container text-center'>
        <div className='row justify-content-center '>
        <div className="col-md-4">
        <img className='galleryimg' src={manch1} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch2} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch3} alt="..."></img>
        </div>
        </div>
        <div className='row justify-content-center'>
        <div className="col-md-4">
        <img className='galleryimg' src={manch4} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch5} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch6} alt="..."></img>
        </div>
        </div>
        <div className='row justify-content-center'>
        <div className="col-md-4">
        <img className='galleryimg' src={manch7} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch8} alt="..."></img>
        </div>
        <div className="col-md-4">
        <img className='galleryimg' src={manch9} alt="..."></img>
        </div>
        </div>
        </div>        
    </div>
  )
}

export default gallery;
