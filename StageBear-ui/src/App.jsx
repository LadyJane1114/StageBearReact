import { useEffect, useState } from 'react'
import './css/App.css'


function App() {
  //Define a state variable
  const [shows, setShows] = useState([])

  //get API Url from env.variables
  const apiURL = import.meta.env.VITE_API_URL

  //Fetch shows from API when components mount
  useEffect(() => {
    const getShows = async () => {
      const response = await fetch(apiURL)
      const result = await response.json()

      if(response.ok){
        setShows(result)
      }
    }
    getShows()
  }, [])


  return (
    <>
      <h1>StageBear</h1>

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
              
              <button>Find Tickets!</button>
              <br/>
            </div>
          ))
        )
      }
    </>
  )
}

export default App
