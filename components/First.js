import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from "@/public/static/logo.png"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'next/image';
import styles from '../styles/First.module.css';




const First = () => {
  return (
    <><div className={styles.navbar}>
      <Navbar variant="dark">
        <Container className={styles.Container} >

          <Navbar.Toggle aria-controls="navbarScroll" className='right-side' />
          <Image src={logo} className={styles.image} />
          <Navbar.Collapse id="basic-navbar-nav" className='float-right'>
            <Nav className={styles.navbaritem}>
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
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blog01" >Blog01</NavDropdown.Item>
                <NavDropdown.Item href="/blogpost" >
                  Blog post
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>


    </>
  )

}

export default First;