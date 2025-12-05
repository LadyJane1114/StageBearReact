import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {CATEGORY_GROUPS} from '../components/ReferenceGroups'
import CategoryHero from "../components/CategoryHero";

const CategoryGroupsPage = ({shows}) => {

    const { category } = useParams();
    const decodedCategory = decodeURIComponent(category);
    const allowedCategories = CATEGORY_GROUPS[decodedCategory]?.map(c => c.value) || [];
        
    const filtered = shows.filter(
        show => allowedCategories.includes(show.CategoryTitle)
        );
    const uniqueShows = [
         ...new Map(filtered.map(show => [show.Title, show])).values()
    ];
    
    const displayLabel = decodedCategory;

  return (
    <>
    <CategoryHero 
        shows={filtered} 
        pageTitle={decodedCategory}
    />

    <div className="category-page">
        <div className="category-list-container">
        {uniqueShows.length === 0 ? (
            <p className="category-page-no-shows">No shows found.</p>
        ) : (
            <Row xs={1} md={2} lg={3} className="g-4">
                {uniqueShows.map((show) => (
                    <Col key={show.ShowID}>
                    <Card className="h-100">
                        <Card.Img
                        variant="top"
                        src={show.Image?.startsWith("http") ? show.Image : "/assets/ShakesPlaceholder.png"}
                        className="category-card-img"
                        />
                        <Card.Body>
                        <Card.Title className="card-title">{show.Title}</Card.Title>
                            <Card.Text className="card-info">
                                    {show.CategoryTitle}
                                    <br/>
                                    {show.VenueName}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-end">
                        <Link to={`/details/${show.ShowID}`}>
                            <button className="details-btn">Find out more!</button>
                        </Link>
                        </Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
        )}
        </div>
    </div>

    </>
  )
}

export default CategoryGroupsPage