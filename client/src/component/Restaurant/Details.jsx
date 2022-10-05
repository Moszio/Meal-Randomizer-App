import React from 'react'
import Map from '../Map/Map'
import '../Style/Details.css'
import { FaTripadvisor } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { AiFillLike } from 'react-icons/ai'
import { GiReturnArrow } from 'react-icons/gi'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'

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
        address: place?.address,
        website: place?.website,
        price_range: place?.price_level,
        // website:
        // price_range:
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
          <div
            className='details-elements main'
            style={{ justifyContent: 'center' }}
          >
            <h4>{place?.name}</h4>
          </div>
          <div className='details-elements'>
            <div>{place?.price_level ? 'Price' : null}</div>
            <div> {place?.price_level}</div>
          </div>
          <div className='details-elements'>
            <div>{place?.ranking ? 'Ranking' : null}</div>
            <div> {place?.ranking}</div>
          </div>
          {place?.cuisine?.map(({ name }) => {
            return (
              <h6 key={name} className='chip'>
                {' '}
                {name}{' '}
              </h6>
            )
          })}
          <div className='details-elements'>
            <div>
              <ImLocation2 />
            </div>
            <div>{place?.address}</div>
          </div>
          <div className='details-elements'>
            <div>
              <FaPhoneAlt />
            </div>
            <div>{place?.phone}</div>
          </div>
          <div className='icon-container-maps'>
            <div className='icons' onClick={handleCollapse}>
              <GiReturnArrow />
            </div>
            <div
              className='icons'
              onClick={() => window.open(place.web_url, '_blank')}
            >
              <FaTripadvisor />
            </div>
            <div
              className='icons'
              onClick={() => window.open(place.website, '_blank')}
            >
              <CgWebsite />
            </div>
            <div className='icons' onClick={handleAddingLikedRestaurants}>
              <AiFillLike />
            </div>
          </div>
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
