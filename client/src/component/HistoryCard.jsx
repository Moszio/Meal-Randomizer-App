import { useState, useEffect } from 'react'
import HistoryNotes from './HistoryNotes'
import HistoryNoteForm from './HistoryNoteForm'

const HistoryCard = ({ restaurant, removeRestaurantFromHistory }) => {
  const [notes, setNotes] = useState([])
  const [images, setImages] = useState([restaurant.image])
  const [collapse, setCollapse] = useState(false)

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

  const handleCollapse = () => {
    setCollapse(!collapse)
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

  console.log(restaurant)
  return (
    <div className='history-card-main'>
      <div className='history-card'>
        <div className='history-image'>
          <img
            src={restaurant.image}
            alt=''
            onClick={handleDeleteHistoryCard}
          />
          {/* <Slide images={images} onClick={handleDeleteHistoryCard} /> */}
        </div>
        <div className='history-details' onClick={handleCollapse}>
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

          {/* <HistoryNoteForm
            restaurant={restaurant}
            addNewNote={addNewNote}
            updateRestaurantImage={updateRestaurantImage}
          /> */}
        </div>
      </div>
      {collapse ? (
        <div className='history-note'>
          <HistoryNoteForm
            restaurant={restaurant}
            addNewNote={addNewNote}
            updateRestaurantImage={updateRestaurantImage}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HistoryCard
