import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CITY_IMAGES } from './ReferenceGroups';

const CityGrid = ({shows}) => {

    const uniqueCities = Array.from(
        new Map(shows.map(show => [show.City, show])).values()
    ).sort((a,b) => {
        if(a.Country <b.Country) return -1;
        if(a.Country> b.Country) return 1;
        return a.City.localeCompare(b.City);
    });


  return (
    <>
    <div className="category-section">
      <div className='category-header'>
        <h2>Cities</h2>
      </div>

      <Row>
        {uniqueCities.map(cityShow => {
        return (
        <Col
            key={cityShow.City}
            sm={12} md={6} lg={6} xl={4}
            className="mb-4"
          >
            <Card className="h-100">

              <Link to={`/city/${encodeURIComponent(cityShow.City)}`}>
                <Card.Img
                  variant="top"
                  src={
                    CITY_IMAGES[cityShow.City?.trim()]
                  }
                  alt={cityShow.City}
                  className="city-card-img"
                />
              </Link>
                  
              <Card.Body>
                <Card.Title className='card-title'>{cityShow.City}</Card.Title>
                <Card.Text className='card-info'>
                  {cityShow.Country}
                </Card.Text>
              </Card.Body>

              <Card.Footer className='d-flex justify-content-end'>
                <Link to={`/city/${encodeURIComponent(cityShow.City)}`}>
                  <button className="details-btn">See shows</button>
                </Link>
              </Card.Footer>

            </Card>
          </Col>
        )       
})}
      </Row>
    </div>
    </>
  )
}

export default CityGrid