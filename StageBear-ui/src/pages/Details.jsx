import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Details = ({shows}) => {
    const { id } = useParams()

    const show = shows.find(s => s.ShowID === parseInt(id))

    if (!show) {
        return <p>Show not found.</p>
    }

    const performances = shows
      .filter(s => s.Title === show.Title)
      .sort((a, b) => new Date(a.Scheduled) - new Date(b.Scheduled))

    

    return (
    <>
    <div className='all-details-container'>
      <div className='details-left'>

        <div className='poster-wrapper'>
      {show.Image?.trim().startsWith("http") ? (
                <img src={show.Image} className="img-fluid img-thumbnail show-poster" />
                    ) : (
                      <img src="/ShakesPlaceholder.png" />
                    )}
      <div className='details-overlay'>
        <h1 className='show-title'>{show.Title}</h1>
      </div>
    </div>

      <div className='show-description'>
      <h2>About this Show</h2>
        <p>{show.Description}</p>
      <br/>
      <h3>Venue</h3>
        <p>{show.VenueName}</p>
    </div>
      </div>

      <div className='details-right'>
        <h2 className="schedule-header">Upcoming Performances</h2>

        <ul className="schedule-list">
          {performances.map((p) => (
            <li key={p.ShowID} className="schedule-item">
              {new Date(p.Scheduled).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
              <Link to="/purchase"><button className="purchase-tkts">Find a Seat!</button></Link>
            </li>
          ))}
        </ul>
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

export default Details