import React from 'react'

const Card = ({ places, handleCollapse, randomNumber }) => {
  const place = places?.[randomNumber]
  const rating = Number(place?.rating) ? Number(place?.rating) : ''
  console.log('num', rating)

  return (
    <div
      className='restaurant-card-container'
      style={{
        width: '300px',
        height: '300px',
        margin: 'auto auto',
        textAlign: 'center',
      }}
    >
      <div className='picture'>
        {/* <img src={image} alt="somepicture" style={{width: "300px", height:"300px"}}/> */}
      </div>
      <div className='details'>
        <h2>{place?.name}</h2>

        <h4>{place?.price_level}</h4>
        <h4>{rating}</h4>
        <button onClick={handleCollapse}>click</button>
      </div>
    </div>
  )
}

export default Card
