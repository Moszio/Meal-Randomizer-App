import './RewardStyle.css'

const RewardsCard = ({ reward }) => {
  const { name, category, image, cost } = reward

  return (
    <div className='reward-card'>
      <h2>{name}</h2>
      <img src={`${image}`} alt='' />
      <h3>{cost}</h3>
      <h4>{category}</h4>
    </div>
  )
}

export default RewardsCard
