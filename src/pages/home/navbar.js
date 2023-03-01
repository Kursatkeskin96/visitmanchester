import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import logo from '../../images/visitmanch.png'


 function navbar() {

  return (
    
    <Navbar bg="light" expand="md">
    <Container>
      <Navbar.Brand >
      <Link to="/" className="nav-link"><img className='logo' src={logo} alt="logo"></img></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shopping" className="nav-link">Shopping</Link>
        <Link to="/foods-and-drinks" className='nav-link'>Foods and Drinks</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
  
export default navbar;