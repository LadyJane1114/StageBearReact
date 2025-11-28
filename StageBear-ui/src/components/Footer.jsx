import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <>
    <Container fluid className='footer'>
      <Row>
        <Col sm={8}>
          <div className='copyright'>
            <h3>&copy; Lady Jane Scott - Nov 2025</h3>
          </div>
        </Col>
        <Col sm={4}>
          <div>
              <h3>Helpful Links</h3>
              <ul>
                  <li className><Link to="/" className="footerlink">Home Page</Link></li>
                  <li><Link to="/aboutUs" className="footerlink">About Us</Link></li>
                  <li><Link to="/faq" className="footerlink">Get Help</Link></li>
                  <li><Link to="/aboutShakes" className="footerlink">Who is Shakes?</Link></li>
              </ul>
          </div>
        </Col> 
      </Row>
    </Container>
    </>
  )
}

export default Footer