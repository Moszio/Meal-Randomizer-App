import { useState, useEffect } from 'react'

const HistoryCard = ({ restaurant }) => {
  const [newNotes, setNewNotes] = useState([])
  const [notes, setNotes] = useState([])

  const handlePostNewNote = async () => {
    const request = await fetch('/me')
    const response = await request.json()
    setNotes(response.restaurants.notes)
  }

  useEffect(() => {
    handlePostNewNote()
  }, [])

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  console.log('something', newNotes)

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

        <form action=''>
          <input type='text' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default HistoryCard
