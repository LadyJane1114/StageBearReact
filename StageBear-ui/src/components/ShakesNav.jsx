import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from "react-bootstrap"

const ShakesNav = () => {
  return (
    <>
    <Navbar className="ShakesNav">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand as={Link} to="/">StgBr</Navbar.Brand>
                <Nav className="d-flex justify-content-center">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {/* <Nav.Link as={Link} to="/details:id">Details</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default ShakesNav