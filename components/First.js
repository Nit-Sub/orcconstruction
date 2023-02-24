import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#link">Project</Nav.Link>
            <Nav.Link href="#home">Pages</Nav.Link>
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