import React, { Component } from 'react'
import './background.css'
import 'animate.css';

class background extends Component {
  render() {
    return (
      <div className='home-background wrapper d-flex flex-column align-items-center'>
        <div className="m-auto d-flex flex-column align-items-center">
        <h1 className="background-h text-white animate__animated animate__backInLeft">Welcome to Manchester</h1>
        <p className="background-p text-white animate__animated animate__backInRight">The Original Modern City</p>
      </div>
      </div>
    )
  }
}
export default background;