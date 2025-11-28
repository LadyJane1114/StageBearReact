
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Details = ({shows}) => {
    const { id } = useParams()

    const show = shows.find(s => s.ShowID === parseInt(id))

    

    const performances = shows
      .filter(s => s.Title === show.Title)
      .sort((a, b) => new Date(a.Scheduled) - new Date(b.Scheduled))

    const [modalVisible, setModalVisible] = useState(false);
    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);

    if (!show) {
        return <p>Show not found.</p>
    }

    return (
    <>
    <div className='all-details-container'>
      <div className='details-left'>

        <div className='poster-wrapper'>
      {show.Image?.trim().startsWith("http") ? (
                <img src={show.Image} className="img-fluid img-thumbnail show-poster" />
                    ) : (
                      <img src="/ShakesPlaceholder.png" />
                    )}

          <div className='details-overlay'>
            <h1 className='show-title'>{show.Title}</h1>
          </div>

        </div>

        <div className='show-description'>
            <h2>About this Show</h2>
              <p>{show.Description}</p>
            <br/>
            <h3>Venue</h3>
              <button onClick={handleShow} className='venue-btn'>{show.VenueName}</button>

              <Modal show={modalVisible} onHide={handleClose}>

                  <Modal.Header closeButton>
                    <Modal.Title>{show.VenueName}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Address: {show.StreetAddress}, {show.City} {show.Region}, {show.Country}</p>
                    <p>Phone: +{show.VenuePhone}</p>
                    <br/>
                    <h5>About this Venue</h5>
                    <p>{show.VenueNotes}</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                      Close
                    </button>
                  </Modal.Footer>
            </Modal>
        </div>
      </div>

      <div className='details-right'>
        <h2 className="schedule-header">Upcoming Performances</h2>

        <ul className="schedule-list">
          {performances.map((p) => (
            <li key={p.ShowID} className="schedule-item">
              {new Date(p.Scheduled).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
              <Link to="/purchase"><button className="purchase-tkts">Find a Seat!</button></Link>
            </li>
          ))}
        </ul>
        <div className='btn-home-container'>
          <Link to="/">
          <button className="btn-home">Back to Home Page</button>
        </Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default Details