import { useState, useEffect } from 'react'
import HistoryCard from './HistoryCard'

const History = ({ user }) => {
  console.log(user?.restaurants)

  return (
    <div className='rewards-page'>
      <div className='welcome-message'>WELCOME MESSAGE</div>
      <div className='rewards-container'>
        {user?.restaurants?.map((restaurant, index) => {
          return <HistoryCard key={index} restaurant={restaurant} />
        })}
      </div>
    </div>
  )
}

export default History
