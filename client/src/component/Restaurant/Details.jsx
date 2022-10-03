import React from 'react'
import Map from '../Map/Map'
import './style.css'

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

  console.log('place', place)

  const handleAddingLikedRestaurants = async () => {
    const image = place.photo
      ? place.photo.images.large.url
      : 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='

    let request = await fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: place.name,
        user_id: user.id,
        image: image,
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
            src={
              place.photo
                ? place.photo.images.large.url
                : 'https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg'
            }
            alt='resaurant'
          />
        </div>
        <div className='details-details'>
          <h1>{place?.name}</h1>
          <h3>{place?.price_level}</h3>
          <h4>{place?.ranking}</h4>
          {place?.cuisine?.map(({ name }) => {
            return <h4 key={name}> {name} </h4>
          })}
          <p>{place?.address}</p>
          <p>{place?.phone}</p>
          <h4 onClick={() => window.open(place.web_url, '_blank')}>
            tripadvisor
          </h4>
          <h4 onClick={() => window.open(place.website, '_blank')}>website</h4>
          <button onClick={handleCollapse}>Back</button>
          <button onClick={handleAddingLikedRestaurants}>like</button>
        </div>
      </div>

      <Map
        // setCoordinates={setCoordinates}
        // setBounds={setBounds}
        coordinates={coordinates}
        handleGetPlacesChange={handleGetPlacesChange}
        place={place}
      />
    </div>
  )
}

export default Details
