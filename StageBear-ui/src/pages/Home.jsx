import { Link } from 'react-router-dom'
import HeroEvents from '../components/HeroEvents'
import CategoryGrid from '../components/CategoryGrid'
import {CATEGORY_GROUPS} from '../components/CategoryGroups'

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