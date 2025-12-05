
import {CATEGORY_GROUPS} from '../components/ReferenceGroups'

import HeroEvents from '../components/HeroEvents'
import CategoryGrid from '../components/CategoryGrid'
import CityGrid from '../components/CityGrid'



const Home = ({shows}) => {


  return (
    <>
    <HeroEvents shows={shows}/>

 {Object.entries(CATEGORY_GROUPS).map(([groupTitle, allowedCategories]) => {
    const allowedValues = allowedCategories.map(c => c.value);
    const filteredShows = shows.filter(show =>
      allowedValues.includes(show.CategoryTitle)
    );

        return (
          <CategoryGrid
            key={groupTitle}
            title={groupTitle}
            shows={filteredShows}
          />
          
        );
      })}
      <CityGrid shows={shows}/>
    </>
  )
}

export default Home