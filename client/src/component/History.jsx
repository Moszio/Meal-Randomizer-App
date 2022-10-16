import HistoryCard from './HistoryCard'
import './Style/History.css'
import Search from './SearchBar'

const History = ({
  restaurants,
  removeRestaurantFromHistory,
  searchResult,
  setSearch,
}) => {
  return (
    <div className='history-page'>
      <div className='welcome-message '>Favorite Places</div>
      <Search setSearch={setSearch} />
      <div className='history-container'>
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
