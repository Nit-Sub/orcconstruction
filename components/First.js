import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import NavDropdown from 'react-bootstrap/NavDropdown'


const First = () => {
  return (
    <>
    
    



    <Navbar bg="dark" expand="lg" variant="dark">
      <Container >
        
        <Navbar.Toggle aria-controls="navbarScroll" className='right-side'/>
        <Navbar.Collapse id="basic-navbar-nav" className='float-left'>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <NavDropdown title="Page" id="basic-nav-dropdown">
              <NavDropdown.Item href="/team" >Team</NavDropdown.Item>
              <NavDropdown.Item href="/career" >
                Career
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
 
}

export default First;