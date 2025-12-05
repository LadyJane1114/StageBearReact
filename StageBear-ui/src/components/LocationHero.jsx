




const LocationHero = ({ type, name, images, pageTitle }) => {
    
    const imageSrc = images[name]

  return (
    <>
    <div className='hero-container'>
        <div className="hero-grid">
            <div className="hero-item">
              <img
                  src={imageSrc}
                  className="img-fluid location-img"
                  alt={name}
                />
            </div>
          <div className="hero-overlay">
            <h1>{pageTitle || name}</h1>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default LocationHero