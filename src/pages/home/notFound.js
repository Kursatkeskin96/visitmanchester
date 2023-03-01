import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

 function notFound() {
  return (
   <div className='box'>
    <h1>Oops! You seem to be lost.</h1>
    <p>Go to home page.</p>
    <Link to="/"><button type='button'>Home</button></Link>
   </div>
  )
}

export default notFound;