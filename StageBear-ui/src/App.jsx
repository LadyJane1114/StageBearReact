import Home from './pages/Home'
import Details from './pages/Details'
import ShakesNav from './components/ShakesNav'
import './css/App.css'
import { Router,Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
    <ShakesNav/>
      <Routes>
        <Route path="/" element={<Home shows={shows}/>}/>
        <Route path='/details/:id' element={<Details shows={shows}/>}/>
      </Routes>
    </>
  )
}

export default App
