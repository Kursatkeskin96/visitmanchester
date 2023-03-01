import React from 'react'
import Navbar from '../home/navbar';
import { Link } from 'react-router-dom'
import Footer from '../home/footer'
import './fooddrink.css'

export default function fooddrinks() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
    <Navbar />
    <div className='food-background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
        <h1 className="shop-h text-white animate__animated animate__backInLeft">Foods and Drinks in Manchester</h1>
        <p className="shop-p text-white animate__animated animate__backInRight">You are gonna have so much weight!</p>
      </div>
      </div>
      </div>
      <div className='container'>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/foods-and-drinks" onClick={handleLinkClick}>Foods and drinks</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Foods and Drinks in Manchester</h1>
        <hr></hr>
        <p>Manchester is known for its vibrant food and drink scene that offers something for everyone. 
          With an eclectic mix of traditional British fare and international cuisine, Manchester has become a 
          destination for foodies seeking unique culinary experiences.
          <br /><br /> 
          One of the reasons why food and drinks in Manchester is amazing is the city's diverse culinary scene. 
          From street food vendors to Michelin-starred restaurants, there is no shortage of options for foodies in 
          Manchester. The city is home to a variety of international cuisines, including Chinese, Indian, Italian, 
          and Middle Eastern, as well as traditional British food like fish and chips and Sunday roasts.
          <br /><br />
          In addition to its diverse culinary scene, Manchester is also known for its innovative and experimental 
          food and drink offerings. The city is home to a number of independent bars and restaurants that specialize in 
          unique cocktails and craft beers. From quirky speakeasy-style bars to rooftop cocktail lounges, Manchester has 
          something for everyone when it comes to drink.
          <br /><br />
          Another reason why food and drinks in Manchester is amazing is the city's commitment to sustainable 
          and locally sourced ingredients. Many restaurants and bars in Manchester use locally sourced produce and 
          support independent suppliers, helping to create a more sustainable and ethical food and drink industry in 
          the city.
          <br /><br />
          Finally, Manchester's food and drink scene is also known for its affordability. With a range of dining options 
          to suit all budgets, visitors to Manchester can enjoy a high-quality culinary experience without breaking the 
          bank.
          <br /><br />
          In conclusion, Manchester's food and drink scene is amazing for its diverse culinary offerings, 
          innovative and experimental food and drink options, commitment to sustainability, and affordability. 
          Whether you are a foodie looking for a unique dining experience or a drinks enthusiast seeking out the latest 
          craft cocktails, Manchester has something to offer.
          </p>
          <h5 className='mt-5'>Take a look at some of our suggestions</h5>
        <hr></hr>
        <div className='foodsgcard-container'>
        <Link to='/foods-and-drinks/hard-rock-cafe' onClick={handleLinkClick}><div className='food-suggestion-card1'><p>Hard Rock Cafe</p></div></Link>
        <Link to='/foods-and-drinks/jamboree' onClick={handleLinkClick}><div className='food-suggestion-card2'><p>Jamboree Restaurant</p></div></Link>
        <Link to='/foods-and-drinks/gaucho' onClick={handleLinkClick}><div className='food-suggestion-card3'><p>Gaucho Restaurant</p></div></Link>
        </div>
    </div>
    <Footer />
    </div>
  )
}
