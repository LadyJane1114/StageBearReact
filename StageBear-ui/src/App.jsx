import { Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Home from './pages/Home'
import Details from './pages/Details'
import ShakesNav from './components/ShakesNav'
import Footer from './components/Footer'
import AboutShakes from './pages/footer/AboutShakes'
import AboutUs from './pages/footer/AboutUs'
import GetHelp from './pages/footer/GetHelp'
import Purchase from './pages/Purchase'
import CantWait from './pages/CantWait'
import CategoryPage from './pages/navLinks/CategoryPage'
import CategoryGroupsPage from './pages/CategoryGroupsPage'
import CityGrid from './components/CityGrid'
import CountryPage from './pages/navLinks/CountryPage'
import CityPage from './pages/CityPage'
import SearchResults from './pages/navLinks/SearchResults'




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
        <Route path="/purchase" element={<Purchase shows={shows} />} />
        <Route path="/cant-wait-to-see-you" element={<CantWait />} />

        <Route path="/category/:category" element={<CategoryPage shows={shows}/>} />
        <Route path="/category-group/:category" element={<CategoryGroupsPage shows={shows}/>} />
        <Route path="/country/:country" element={<CountryPage shows={shows}/>}/>
        <Route path="/search/:query" element={<SearchResults shows={shows} />} />


        <Route path="/:cityName" element={<CityGrid />} />
        <Route path="/city/:city" element={<CityPage shows={shows}/>}/>

        
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/faq' element={<GetHelp/>}/>
        <Route path='/aboutShakes' element={<AboutShakes/>}/>
      </Routes>

      <Footer/>

    </>
  )
}

export default App
