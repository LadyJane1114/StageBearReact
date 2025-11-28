import React from 'react'
import { Link } from 'react-router-dom' //

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='copyright'>&copy; Lady Jane Scott - Nov 2025</div>
        <div>
            <h2>Helpful Links</h2>
            <ul>
                <li><Link to="/" className="footerlink">Home Page</Link></li>
                <li><Link to="/aboutUs" className="footerlink">About Us</Link></li>
                <li><Link to="/faq" className="footerlink">Get Help</Link></li>
                <li><Link to="/aboutShakes" className="footerlink">Who is Shakes?</Link></li>
            </ul>
        </div>
        <div>
            <h2></h2>
        </div>
    </footer>
    </>
  )
}

export default Footer