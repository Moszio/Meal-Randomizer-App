import React from 'react'
import Rating from '@mui/material/Rating'
import '../Style/Card.css'

const Card = ({ places, handleCollapse, randomNumber }) => {
  const place = places?.[randomNumber]
  const rating = Number(place?.rating) ? Number(place?.rating) : null
  const image = place?.photo
    ? place?.photo?.images.large.url
    : 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='
  // console.log('num', place)

  return (
    <div className='restaurant-card-container'>
      <div className='card-picture'>
        <img
          src={image}
          alt='somepicture'
          style={{ width: '300px', height: '300px' }}
        />
      </div>
      <div className='card-details'>
        <h2>{place?.name}</h2>
        <h4>{rating}</h4>
        <Rating name='read-only' value={rating} readOnly />
        <button onClick={handleCollapse}>click</button>
      </div>
    </div>
  )
}

export default Card
