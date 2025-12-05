import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown, Form, Button } from "react-bootstrap"
import ShakesLogo from '../assets/ShakesLogo.png'
import {CATEGORY_GROUPS} from './ReferenceGroups'

const ShakesNav = () => {
  return (
    <>
      <Navbar className="ShakesNav" expand="lg">
        <Container fluid className='nav-container'>
          <Navbar.Brand as={Link} to="/">
            <img className="shakesLogoNav" src={ShakesLogo} alt="ShakesLogo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" className="custom-toggle">Menu</Navbar.Toggle>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Theatre, Films, and Spoken Word" id="dropdown-1">
                {CATEGORY_GROUPS["Theatre, Films, and Spoken Word"].map(cat => (
                  <NavDropdown.Item 
                    key={cat.value} 
                    as={Link} 
                    to={`/category/${encodeURIComponent(cat.value)}`}>
                    {cat.label}</NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Music and Fine Arts" id="dropdown-2">
                {CATEGORY_GROUPS["Music and Fine Arts"].map(cat => (
                  <NavDropdown.Item 
                    key={cat.value} 
                    as={Link} 
                    to={`/category/${encodeURIComponent(cat.value)}`}>
                    {cat.label}</NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Special Acts and Family Events" id="dropdown-3">
                {CATEGORY_GROUPS["Special Acts and Family Events"].map(cat => (
                  <NavDropdown.Item 
                    key={cat.value} 
                    as={Link} 
                    to={`/category/${encodeURIComponent(cat.value)}`}>
                    {cat.label}</NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Countries" id="dropdown-4">
                <NavDropdown.Item as={Link} to ="/Canada">Canada</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ="/United%20States">United States</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ="/United%20Kingdom">United Kingdom</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex mt-3 mt-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
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
