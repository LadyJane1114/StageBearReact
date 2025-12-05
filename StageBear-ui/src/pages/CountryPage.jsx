import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import LocationHero from "../components/LocationHero";
import { COUNTRY_IMAGES } from '../components/ReferenceGroups';

const CountryPage = ({shows}) => {
    const {country} = useParams();
    function safeDecodeURIComponent(str) {
        try {
            return decodeURIComponent(str);
        } catch {
            return str;
        }
    }

const decodedCountry = safeDecodeURIComponent(country);
    
    const filtered = shows.filter(
      (show) => show.Country?.trim() === decodedCountry?.trim() 
    );
    const uniqueShows = [
        ... new Map(filtered.map(show => [show.Title, show])).values()
    ];

    const countryName = decodedCountry;

  return (
    <>
    <LocationHero
    type="country" name={countryName} images={COUNTRY_IMAGES} pageTitle={`Shows in ${countryName}`}
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
                                {show.VenueName} - {show.City}
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

export default CountryPage