import React from 'react'
import Map from '../Map/Map'
import './style.css'

const Details = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  handleCollapse,
  handleGetPlacesChange,
  randomNumber,
}) => {
  const place = places?.[randomNumber] ?? { name: 'asdfsdf' }

  return (
    <div className='details-container'>
      <div className='images-container'>
        {/* <div className='rest-image'><img src={image} alt="restaurant"/></div> */}
        <div className='map'>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            handleGetPlacesChange={handleGetPlacesChange}
          />
        </div>
      </div>
      <div className='description-container'>
        <div>
          <h1>{place?.name}</h1>
          <h3>{place?.price_level}</h3>
          {/* <p>{places[randomNumber].description}</p>
          <h3>{places[randomNumber].rating}</h3> */}
        </div>
        <div>
          <button onClick={handleCollapse}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Details
