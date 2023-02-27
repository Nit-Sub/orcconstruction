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
            <Nav >
              <Nav.Link href="/"><span className={styles.navbaritem}>Home </span></Nav.Link>
              <Nav.Link href="/about"> <span className={styles.navbaritem}>About </span></Nav.Link>
              <Nav.Link href="/services"><span className={styles.navbaritem}>Services</span></Nav.Link>
              <Nav.Link href="/project"><span className={styles.navbaritem}>Project</span></Nav.Link>
              <NavDropdown title="Page" id="basic-nav-dropdown">
                <NavDropdown.Item href="/team" ><span className={styles.navbaritem}>Team</span></NavDropdown.Item>
                <NavDropdown.Item href="/career" >
                <span className={styles.navbaritem}>  Career</span>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blog01" ><span className={styles.navbaritem}>Blog01</span></NavDropdown.Item>
                <NavDropdown.Item href="/blogpost" >
                <span className={styles.navbaritem}> Blog post</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact"><span className={styles.navbaritem}>Contact</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>


    </>
  )

}

export default First;