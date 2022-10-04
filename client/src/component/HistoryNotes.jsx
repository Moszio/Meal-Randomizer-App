import { useState } from 'react'

const HistoryNotes = ({ note, removeNote }) => {
  const handleDeleteNote = async () => {
    const request = await fetch(`http://localhost:3000/notes/${note.id}`, {
      method: 'DELETE',
    })
    removeNote(note.id)
  }

  //   const handleChangeNote = async () => {
  //     const request = await fetch(`http://localhost:3000/notes/${note.id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name: '' }),
  //     })
  //     let response = request.json()
  //     console.log(response)
  //   }

  return (
    <div className='notes'>
      {note.note}
      <button onClick={handleDeleteNote}>
        <i class='fa-solid fa-minus'></i>
      </button>
    </div>
  )
}

export default HistoryNotes
