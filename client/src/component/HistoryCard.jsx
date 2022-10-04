import { useState, useEffect } from 'react'
import HistoryNotes from './HistoryNotes'
import HistoryNoteForm from './HistoryNoteForm'
import Slide from './Carousel'

const HistoryCard = ({ restaurant, removeRestaurantFromHistory }) => {
  const [notes, setNotes] = useState([])
  const [images, setImages] = useState([restaurant.image])

  const handleFetchNote = async () => {
    const request = await fetch(`/restaurants/${restaurant?.id}`)
    const response = await request.json()
    setNotes(response.notes)
  }

  const handleDeleteHistoryCard = async () => {
    const request = await fetch(`/restaurants/${restaurant?.id}`, {
      method: 'DELETE',
    })
    removeRestaurantFromHistory(restaurant.id)
  }

  // console.log('check', restaurant.id)

  useEffect(() => {
    handleFetchNote()
  }, [])

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const updateRestaurantImage = (restaurantImage) => {
    setImages(
      restaurant.id === restaurantImage.id ? restaurantImage : restaurant
    )
  }

  return (
    <div className='history-card'>
      <div className='history-image'>
        <img src={restaurant.image} alt='' onClick={handleDeleteHistoryCard} />
        {/* <Slide images={images} onClick={handleDeleteHistoryCard} /> */}
      </div>
      <div className='history-details'>
        <h2>{restaurant?.name}</h2>
        {notes?.map((note, index) => {
          return (
            <HistoryNotes
              note={note}
              key={index}
              restaurant={restaurant}
              removeNote={removeNote}
            />
          )
        })}
        <HistoryNoteForm
          restaurant={restaurant}
          addNewNote={addNewNote}
          updateRestaurantImage={updateRestaurantImage}
        />
      </div>
    </div>
  )
}

export default HistoryCard
