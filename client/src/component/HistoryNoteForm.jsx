import { useState } from 'react'

const HistoryNoteForm = ({ restaurant, addNewNote }) => {
  const [newNotes, setNewNotes] = useState([])

  const handlePostNewNote = async (e) => {
    e.preventDefault()
    const request = await fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notes: newNotes,
        restaurant_id: restaurant.id,
      }),
    })
    let response = await request.json()
    addNewNote(response)
    setNewNotes([])
    // if (response.ok) {
    //   console.log('successful')
    // } else console.log('error')
  }

  //   console.log(restaurant.id)

  return (
    <form onSubmit={handlePostNewNote}>
      <label htmlFor='notes'> Add notes here</label>
      <br />
      <input
        type='text'
        id='addnote'
        value={newNotes}
        onChange={(e) => setNewNotes(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default HistoryNoteForm
