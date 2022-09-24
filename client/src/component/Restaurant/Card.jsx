import React from 'react'

const Card = ({ place, handleCollapse }) => {
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
        {/* <h2>{place[1].name}</h2> */}
        {/* <p>{description}</p>
        <h4>{price_level}</h4> */}
        <button onClick={handleCollapse}>click</button>
      </div>
    </div>
  )
}

export default Card
