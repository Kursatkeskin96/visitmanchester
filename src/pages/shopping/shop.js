import React from 'react'
import Navbar from '../home/navbar';
import Footer from '../home/footer';
import './shop.css'
import {Link, Outlet} from "react-router-dom"


export default function shop() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
    <Navbar />
    <div className='background-img'>
    <div className='wrapper d-flex flex-column align-items-center'>
        <div className="d-flex flex-column align-items-center">
        <h1 className="shop-h text-white animate__animated animate__backInLeft">Shopping in Manchester</h1>
        <p className="shop-p text-white animate__animated animate__backInRight">Best place to be shopping!</p>
      </div>
      </div>
      </div>
      <div className='container'>

      <nav aria-label="breadcrumb" className='mt-3'>
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to="/shopping" onClick={handleLinkClick}>Shopping</Link></li>
    </ol>
    </nav>

        <h1 className='mt-4'>Shopping in Manchester</h1>
        <hr></hr>
        <p>Visitors travel from all over the world to shop in Manchester and it's easy to see why.
          <br /><br /> 
          Manchester is a city that has a lot to offer in terms of shopping experience. It has some of the best 
          shopping destinations in the world, making it an ideal place for shoppers to indulge in their passion. 
          There are a number of reasons why shopping in Manchester is so amazing.
          <br /><br />
          Firstly, Manchester has a great mix of high-end and high-street shops, which cater to a diverse range of 
          budgets and tastes. Whether you're looking for designer brands, vintage stores, or independent boutiques, 
          Manchester has it all. With its wide range of shops, it is a paradise for fashion lovers and shopaholics.
          <br /><br />
          Secondly, Manchester is home to some of the largest shopping centers in the UK. The Trafford Centre, 
          for instance, is a shopper's paradise, with over 200 stores, a variety of restaurants and cafes, 
          and entertainment options such as an aquarium and a cinema. Other popular shopping destinations in Manchester 
          include the Arndale Centre and the Northern Quarter, both of which offer a unique shopping experience.
          <br /><br />
          Thirdly, Manchester is a city that has a rich cultural history and a vibrant arts scene, which is reflected 
          in its shopping options. You can find unique and one-of-a-kind items in the independent shops and markets 
          that line the city's streets. The Northern Quarter, for example, is known for its quirky and eclectic stores 
          that sell everything from vintage clothing to handmade crafts.
          <br /><br />
          Finally, Manchester is a city that is easy to get around, making it a great place to shop. With excellent public 
          transport links, including buses, trams, and trains, shoppers can easily move from one shopping destination to 
          another. Plus, the city's compact size means that everything is within easy reach, making shopping in Manchester 
          a stress-free and enjoyable experience.
          <br /><br />
          In conclusion, shopping in Manchester is amazing due to its diverse range of shops, large shopping centers, unique 
          independent stores, and convenient location. Manchester truly offers a shopping experience like no other, and is 
          a must-visit destination for all those who love to shop.
          </p>
          <h5 className='mt-5'>Take a look at some of our suggestions</h5>
        <hr></hr>
        <div className='sgcard-container'>
        <Link to='/shopping/trafford-center' onClick={handleLinkClick}><div className='suggestion-card1'><p>Trafford Center</p></div></Link>
        <Link to='/shopping/arndale' onClick={handleLinkClick}><div className='suggestion-card2'><p>Manchester Arndale</p></div></Link>
        <Link to='/shopping/royal-exchange' onClick={handleLinkClick}><div className='suggestion-card3'><p>The Royal Exchange</p></div></Link>
        </div>
    </div>
    <Footer />
    <Outlet />
    </div>
  )
}
