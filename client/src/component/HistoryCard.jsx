const HistoryCard = ({ restaurant }) => {
  return (
    <div className='reward-card'>
      <h2>{restaurant?.name}</h2>
      {/* <img src={`${}`} alt='' /> */}
      <h3>{}</h3>
      <h4>{}</h4>
    </div>
  )
}

export default HistoryCard
