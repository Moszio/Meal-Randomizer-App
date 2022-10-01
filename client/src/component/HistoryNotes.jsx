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
    <div>
      {note.note}
      <button onClick={handleDeleteNote}>X</button>
    </div>
  )
}

export default HistoryNotes
