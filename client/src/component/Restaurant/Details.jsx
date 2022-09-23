import React from 'react'
import Map from '../Map/Map'
import './style.css'

const Details = ({ setCoordinates, setBounds, coordinates, place}) => {


  return (
    <div className='details-container'>
        <div className='images-container'>
          {/* <div className='rest-image'><img src={image} alt="restaurant"/></div> */}
          <div className='map'><Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/></div>
        </div>
        <div className='description-container'>
            <div>
              <h1>{place.name}</h1>
              {/* <h3>{price_level}</h3>
              <p>{description}</p>
              <h3>{rating}</h3> */}
            </div>
            <div><button>Menu</button></div>
        </div>
    </div>
  )
}

export default Details