import { useState, useEffect } from 'react'
import HistoryCard from './HistoryCard'

const History = ({ user }) => {
  // console.log(user?.restaurants)
  const [notes, setNotes] = useState([])

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  //  const removeToy = (id) => {
  //    setToys(toys.filter((toy) => toy.id !== id))
  //  }

  //  const updateLike = (toyLike) => {
  //    setToys(toys.map((toy) => (toy.id === toyLike.id ? toyLike : toy)))
  //  }

  return (
    <div className='rewards-page'>
      <div className='welcome-message '>WELCOME MESSAGE</div>
      <div className='rewards-container'>
        {user?.restaurants?.map((restaurant, index) => {
          return <HistoryCard key={index} restaurant={restaurant} />
        })}
      </div>
    </div>
  )
}

export default History
