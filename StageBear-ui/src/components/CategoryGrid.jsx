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
      <div className='category-header'>
        <h2>{title} </h2>
        <Link to={`/category-group/${encodeURIComponent(title)}`}className="seeAllBtn">See all...</Link>
      </div>
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
                <Card.Title className='card-title'>{show.Title}</Card.Title>
                <Card.Text className='card-info'>{show.CategoryTitle}</Card.Text>
              </Card.Body>

              <Card.Footer className='d-flex justify-content-end'>
                <Link to={`/details/${show.ShowID}`}>
                  <button className="details-btn">Find out more!</button>
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
