import React, { useState } from 'react'
import united from '../../images/manchesterunited.png'
import city from '../../images/manchestercity.jpg'
import './manchesteris.css';


 function Manchesteris() {

    const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className='container mt-5 mb-5'>
        <hr></hr>
        <h1 className='mb-5'>One Last Thing...</h1>
 
        <h5 className='text-center'>Choose Your Side</h5>
        <div className='d-flex justify-content-around mt-1'>
            <div>
                <img className='img' src={united} alt="..."></img>
            </div>
            <div>
                <img className='img' src={city} alt="..."></img>
            </div>
        </div>
        <div className='d-flex justify-content-around mt-1'>
            <div>
        <button onClick={() => setSelectedButton("red")} type="button" className="btn btn-danger mt-3">Red!</button>
        </div>
        <div>
        <button onClick={() => setSelectedButton("blue")} type="button" className="btn btn-primary mt-3">Blue!</button>
        </div>
    </div>
    <div className='text'>
    {selectedButton === "red" && <p className='red'>Manchester is RED!</p>}
    {selectedButton === "blue" && <p className='blue'>Manchester is BLUE!</p>}
    </div>
    </div>
  )
}

export default Manchesteris;