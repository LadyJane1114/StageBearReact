import { Link } from 'react-router-dom'
import ShakesPlaceholder from '../assets/ShakesPlaceholder.png'

const CantWait = () => {
  return (
    <>
    <div className='cantWait-container'>
      <h1>Thank you for your purchase!</h1>
      <h2>We can't wait to see you!</h2>
      <img className="shakesCantWait" src={ShakesPlaceholder} alt="ShakesPlaceholder" />
      <h3>Check your email for confirmation of your tickets.</h3>
      <p>(Be sure to check your spam folder!)</p>
          <Link to="/">
            <button className="btn-home">Back to Home Page</button>
          </Link>
    </div>
    </>
  )
}

export default CantWait;