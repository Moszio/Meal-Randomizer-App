import { useState, useEffect } from 'react'
import RewardsCard from './RewardCard'
const Rewards = () => {
  const [rewards, setRewards] = useState([])

  const fetchRewards = async () => {
    const request = await fetch('http://localhost:3000/rewards')
    const response = await request.json()
    setRewards(response)
  }

  useEffect(() => {
    fetchRewards()
  }, [])

  console.log(rewards)

  return (
    <div className='rewards-page'>
      <div className='rewards-container'>
        {rewards.map((reward, index) => {
          return <RewardsCard reward={reward} key={index} />
        })}
      </div>
    </div>
  )
}

export default Rewards
