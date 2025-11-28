import React from 'react'
import App from '../App'

const HeroEvents = ({ shows = [] }) => {
  const upcomingShows = shows
    .sort((a,b) => new Date(a.Scheduled) - new Date(b.Scheduled))
    .filter((show,index,arr) => arr.findIndex(s=> s.Title === show.Title)=== index)
    .slice(0,3)

  
  return (
    <>
    <div className='hero-container'>
        <div className="hero-grid">
          {upcomingShows.map(show => (
            <div key={show.ShowID} className="hero-item">
              <img
                  src={show.Image?.startsWith("http") ? show.Image : `/assets/ShakesPlaceholder.png`}
                  className="img-fluid"
                  alt={show.Title}
                />
            </div>
          ))}
          <div className="hero-overlay">
            <h1>Get the best seats to all your favourite shows!</h1>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default HeroEvents