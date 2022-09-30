import HistoryCard from './HistoryCard'
import './Rewards/RewardStyle.css'
import { useState } from 'react'

const History = ({ user, removeRestaurantFromHistory }) => {
  const [restaurants, setRestaurants] = useState([user.restaurants])

  // console.log('test', restaurants)

  return (
    <div className='rewards-page'>
      <div className='welcome-message '>WELCOME MESSAGE</div>
      <div className='rewards-container'>
        {user?.map((restaurant, index) => {
          return (
            <HistoryCard
              key={index}
              restaurant={restaurant}
              removeRestaurantFromHistory={removeRestaurantFromHistory}
            />
          )
        })}
      </div>
    </div>
  )
}

export default History
