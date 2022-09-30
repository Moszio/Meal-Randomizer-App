import HistoryCard from './HistoryCard'
import './Rewards/RewardStyle.css'

const History = ({ restaurants, removeRestaurantFromHistory }) => {
  // console.log('test', restaurants)

  return (
    <div className='rewards-page'>
      <div className='welcome-message '>WELCOME MESSAGE</div>
      <div className='rewards-container'>
        {restaurants?.map((restaurant, index) => {
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
