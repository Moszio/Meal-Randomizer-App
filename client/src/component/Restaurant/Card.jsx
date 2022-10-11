import React from 'react'
import Rating from '@mui/material/Rating'
import '../Style/Card.css'

const Card = ({ places, handleCollapse, randomNumber }) => {
  const place = places?.[randomNumber]
  const rating = Number(place?.rating) ? Number(place?.rating) : null
  const image = place?.photo
    ? place?.photo?.images.large.url
    : 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='

  return (
    <div className='restaurant-card-container'>
      <div className='card-picture'>
        <img src={image} alt='somepicture' />
      </div>
      <div className='card-details'>
        <h2>{place?.name}</h2>
        <Rating name='read-only' value={rating} readOnly />
        <button onClick={handleCollapse}>Details</button>
      </div>
    </div>
  )
}

export default Card
