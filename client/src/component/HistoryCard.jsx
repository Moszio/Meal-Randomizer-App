const HistoryCard = ({ restaurant }) => {
  return (
    <div className='history-card'>
      <div className='history-image'>
        <img
          src='https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg'
          alt=''
        />
      </div>
      <div className='history-details'>
        <h2>{restaurant?.name}</h2>
        {/* <img src={`${}`} alt='' /> */}
        <h3>{}</h3>
        <h4>{}</h4>
      </div>
    </div>
  )
}

export default HistoryCard
