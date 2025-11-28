import React from 'react'
import { Link } from 'react-router-dom'
import HeroEvents from '../components/HeroEvents'
import CategoryGrid from '../components/CategoryGrid'

const CATEGORY_GROUPS = {
  "Theatre, Films, and Spoken Word": [
    "Play",
    "Puppetry",
    "Film",
    "Comedy",
    "Spoken Word"
  ],
  "Music and Fine Arts": [
    "Musicals",
    "Concert",
    "Dance",
    "Fine Art"
  ],
  "Special Acts and Family Events": [
    "Circus",
    "Ice Show",
    "Magic/Illusion",
    "Family",
    "Specialty Act",
    "Convention",
    "Rodeo"
  ]
};

const Home = ({shows}) => {


  return (
    <>
    <HeroEvents shows={shows}/>

    {Object.entries(CATEGORY_GROUPS).map(([groupTitle, allowedCategories]) => {
        const filteredShows = shows.filter(show =>
          allowedCategories.includes(show.CategoryTitle)
        );

        return (
          <CategoryGrid
            key={groupTitle}
            title={groupTitle}
            shows={filteredShows}
          />
        );
      })}
    </>
  )
}

export default Home