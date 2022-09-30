import './RewardStyle.css'

const RewardsCard = ({ reward }) => {
  const { name, category, image, cost } = reward

  return (
    <div className='reward-card'>
      <div>
        {' '}
        <img src={`${image}`} alt='' />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{cost}</h3>
        <h4>{category}</h4>
      </div>
    </div>
  )
}

export default RewardsCard
