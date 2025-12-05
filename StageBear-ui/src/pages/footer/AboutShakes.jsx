import { Link } from 'react-router-dom'

import ShakesLogo from '../../assets/ShakesLogo.png'

const AboutShakes = () => {
  return (
    <>
    <div className='all-details-container'>
      <div className='details-left'>
        <div className='poster-wrapper'>
          <img src={ShakesLogo} className="img-fluid shakes-poster"/>
          <h1 className='meet-shakes'>
            Meet Shakes!
          </h1>
        </div>
      </div>

      <div className='details-right'>
        <div className='show-description'>
          <h3>Who is Shakes?</h3>
          <p>Shakes (she/her) is the beautiful face of Stage Bear.</p>
          <p>She's here to help you with all of your ticket purchasing needs.</p>
          <br/>
          <h3>Fun Facts</h3>
          <p>Shakes loves theatre, movies, and skateboarding.</p>
          <p>Her first ever stage role was in Shakespeare's "A Winter's Tale". </p>
          <p className='bear-aside'>("Exit, pursued by Bear."? Yeah, that was her.)</p>
        </div>
        <div className='btn-home-container'>
          <Link to="/">
          <button className="btn-home">Back to Home Page</button>
        </Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default AboutShakes