import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown, Form, Button } from "react-bootstrap"

const ShakesNav = () => {
  return (
    <>
      <Navbar className="ShakesNav" expand="lg">
        <Container fluid className='nav-container'>
          <Navbar.Brand as={Link} to="/">
            <img className="shakesLogoNav" src="./src/assets/ShakesLogo.png" alt="ShakesLogo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" className="custom-toggle">Menu</Navbar.Toggle>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Theatre, Films, and Spoken Word">
                <NavDropdown.Item href="#action4">Plays</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Puppetry</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Films</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Spoken Word</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Music and Fine Arts">
                <NavDropdown.Item href="#action3">Musical Theatre</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Concerts</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Dance</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Fine Art</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Special Acts and Family Events" id="dropdown-3">
                <NavDropdown.Item href="#action3">Circus</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Ice Shows</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Magic/Illusions</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Family Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Specialty Acts</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Conventions</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Rodeo</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Countries" id="dropdown-4">
                <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
                <NavDropdown.Item href="#action4">United States</NavDropdown.Item>
                <NavDropdown.Item href="#action5">United Kingdom</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex mt-3 mt-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="nav-search me-2"
                aria-label="Search"
              />
              <Button className='SearchButton'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default ShakesNav;
