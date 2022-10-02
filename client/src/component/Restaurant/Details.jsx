import React from 'react'
import Map from '../Map/Map'
import './style.css'
import Loading from '../Loading'

const Details = ({
  // setCoordinates,
  // setBounds,
  coordinates,
  places,
  handleCollapse,
  handleGetPlacesChange,
  randomNumber,
  user,
  addNewRestaurantToHistory,
}) => {
  const place = places?.[randomNumber] ?? { name: 'asdfsdf' }

  const handleAddingLikedRestaurants = async () => {
    let request = await fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: place.name,
        user_id: user.id,
      }),
    })
    let response = await request.json()
    addNewRestaurantToHistory(response)
    // if (response.ok) {
    //   console.log(response)
    // } else console.log('clicke')
  }

  return (
    <div className='details-container'>
      <div className='description-container'>
        <div className='details-image'>
          <img
            src='https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg'
            alt='resaurant'
          />
        </div>
        <div className='details-details'>
          <h1>{place?.name}</h1>
          <h3>{place?.price_level}</h3>
          <p>description</p>
          <button onClick={handleCollapse}>Back</button>
          <button onClick={handleAddingLikedRestaurants}>like</button>
        </div>
      </div>

      <Map
        // setCoordinates={setCoordinates}
        // setBounds={setBounds}
        coordinates={coordinates}
        handleGetPlacesChange={handleGetPlacesChange}
      />
    </div>
  )
}

export default Details
