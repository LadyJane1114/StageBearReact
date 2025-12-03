import { Link, useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import HeroEvents from "../components/HeroEvents"
import {CATEGORY_GROUPS} from '../components/CategoryGroups'

const valueToLabelMap = Object.values(CATEGORY_GROUPS)
  .flat()
  .reduce((acc, { value, label }) => {
    acc[value] = label;
    return acc;
  }, {});

const CategoryPage = ({shows}) => {
    const { category } = useParams();   // e.g. "Comedy"
    
    const decodedCategory = decodeURIComponent(category);
    
    const filtered = shows.filter(
        (show) => show.CategoryTitle === decodedCategory
    );
    const displayLabel = valueToLabelMap[decodedCategory] || decodedCategory;

  return (
    <>
    <HeroEvents 
        shows={filtered} 
        pageTitle={displayLabel}
    />

    <div className="category-page">
        <div className="category-list-container">
        {filtered.length === 0 ? (
            <p>No shows found.</p>
        ) : (
            filtered.map((show) => (
            <div key={show.ShowID}>
                <h2>{show.Title}</h2>

                <Image src={show.Image} fluid className="cat-thumbnail"/>

                <p>{new Date(show.Scheduled).toLocaleString("en-US", {
                    timeZone: "Europe/London",
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                })}</p>
                
                <p>{show.VenueName}</p>
                <Link to={`/details/${show.ShowID}`}>
                  <button className="details-btn">Find out more!</button>
                </Link>
            </div>
            ))
        )}
        </div>
    </div>
    </>
  )
}

export default CategoryPage