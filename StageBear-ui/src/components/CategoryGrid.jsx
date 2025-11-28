import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ title, shows = [] }) => {

  const uniqueShows = shows.filter(
    (show, index, arr) => arr.findIndex(s => s.Title === show.Title) === index
  );

  const showsToDisplay = uniqueShows.slice(0, 4);

  return (
    <div className="category-section">
      <h2>{title}</h2>

      <Row>
        {showsToDisplay.map(show => (
          <Col key={show.ShowID} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100">
              <Link to={`/details/${show.ShowID}`}>
                <Card.Img
                  variant="top"
                  src={show.Image?.startsWith("http") ? show.Image : "/assets/ShakesPlaceholder.png"}
                  alt={show.Title}
                  className="category-card-img"
                />
              </Link>

              <Card.Body>
                <Card.Title>{show.Title}</Card.Title>
                <Card.Text>{show.Category}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <Link to={`/details/${show.ShowID}`}>
                  <button className="details-btn">More Details</button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryGrid;
