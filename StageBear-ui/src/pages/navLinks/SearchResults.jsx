import { Row, Col, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SearchResults = ({ shows }) => {
  const { query } = useParams();
  const filteredShows = shows.filter(show =>
    show.Title.toLowerCase().includes(query.toLowerCase())
  );
  const uniqueShows = [
        ...new Map(filteredShows.map(show => [show.Title, show])).values()
    ];

  return (
    <>
        <div className="category-section">
      <div className='category-header'>
        <h2>Search results for "{query}"</h2>
      </div>

      {uniqueShows.length === 0 ? (
        <p className="category-page-no-shows">No shows found.</p>
      ) : (
        <Row>
          {uniqueShows.map(show => (
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
      )}
    </div>
    </>
  )
}

export default SearchResults;
