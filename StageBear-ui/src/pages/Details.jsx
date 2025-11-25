import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Details = ({shows}) => {
    const { id } = useParams()

    const show = shows.find(s => s.ShowID === parseInt(id))

    if (!show) {
        return <p>Show not found.</p>
    }   

    

    return (
    <>
    <h1>{show.Title}</h1>
    {show.Image?.trim().startsWith("http") ? (
                <img src={show.Image} className="img-fluid img-thumbnail" />
                    ) : (
                      <img src="/ShakesPlaceholder.png" />
                    )}
    <p>{show.Description}</p>


    <p><Link to="/">Back to Home</Link></p>
    </>
  )
}

export default Details