import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"

const ShakesNav = () => {
  return (
    <>
    <Navbar className="ShakesNav">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand as={Link} to="/">StgBr</Navbar.Brand>
                <Nav className="d-flex justify-content-center">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <NavDropdown title="Countries" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          United States
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          United Kingdom
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Countries" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          United States
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          United Kingdom
                        </NavDropdown.Item>
                      </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default ShakesNav