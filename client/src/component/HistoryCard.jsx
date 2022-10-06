import { useState, useEffect } from 'react'
import HistoryNotes from './HistoryNotes'
import HistoryNoteForm from './HistoryNoteForm'

const HistoryCard = ({ restaurant, removeRestaurantFromHistory }) => {
  const [notes, setNotes] = useState([])
  const [images, setImages] = useState([restaurant.image])
  const [collapse, setCollapse] = useState(false)
  const [popUp, setPopUp] = useState(false)

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
        <div className='history-details'>
          <h2>{restaurant?.name}</h2>
          <p>{restaurant.address}</p>
          <div className='icon-container'>
            <div
              className='icons'
              onClick={() => window.open(restaurant.website, '_blank')}
            >
              <i className='fa-sharp fa-solid fa-blog'></i>
            </div>
            <div className='icons' onClick={handleCollapse}>
              <i className='fa-solid fa-book'></i>
            </div>
            <div></div>
          </div>

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
          <div className='notes-container'>
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
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HistoryCard
