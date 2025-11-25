import React from 'react'
import { Link } from 'react-router-dom'



const Home = ({shows}) => {



  return (
    <>

      {
        shows.length > 0 && (
          shows.map(show => (
            <div key={show.ShowID}>
              <h2>{show.Title}</h2>
              
              {show.Image?.trim().startsWith("http") ? (
                <img src={show.Image} className="img-fluid img-thumbnail" />
                    ) : (
                      <img src="/ShakesPlaceholder.png" />
                    )}
              <button><Link to={`/details/${show.ShowID}`}>More Details</Link></button>
              <button>Find Tickets!</button>
              <br/>
            </div>
          ))
        )
      }
    </>
  )
}

export default Home