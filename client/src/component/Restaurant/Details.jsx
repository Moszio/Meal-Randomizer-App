import React from 'react'
import Map from '../Map/Map'

const Details = ({ setCoordinates, setBounds, coordinates, place}) => {

  const {name, price_level, description, image, rating, address, phone, website} = place 


  return (
    <div className='details-container'>Details
        <div className='images-container'>
          <div><img src={image} alt="restaurant image" /></div>
          <div className='map'><Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/></div>
        </div>
        <div className='description-container'>
            <div>
              <h1>{name}</h1>
              <h3>{price_level}</h3>
              <p>{description}</p>
              <h3>{rating}</h3>
            </div>
            <div><button>Menu</button></div>
        </div>
    </div>
  )
}

export default Details