import HistoryCard from './HistoryCard'
import './Style/History.css'
import Search from './SearchBar'

const History = ({
  restaurants,
  removeRestaurantFromHistory,
  searchResult,
  setSearch,
}) => {
  // console.log('test', restaurants)

  return (
    <div className='rewards-page'>
      <div className='welcome-message '>WELCOME MESSAGE</div>
      <div className='rewards-container'>
        <Search setSearch={setSearch} />
        {searchResult?.map((restaurant, index) => {
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
