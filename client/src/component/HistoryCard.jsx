import { useState, useEffect } from 'react'
import HistoryNotes from './HistoryNotes'
import HistoryNoteForm from './HistoryNoteForm'

const HistoryCard = ({ restaurant }) => {
  const [notes, setNotes] = useState([])

  const handleFetchNote = async () => {
    const request = await fetch(`/restaurants/${restaurant?.id}`)
    const response = await request.json()
    setNotes(response.notes)
  }

  useEffect(() => {
    handleFetchNote()
  }, [])

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

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
        <HistoryNoteForm restaurant={restaurant} addNewNote={addNewNote} />
      </div>
    </div>
  )
}

export default HistoryCard
