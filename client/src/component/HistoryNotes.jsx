const HistoryNotes = ({ note, removeNote }) => {
  const handleDeleteNote = async () => {
    await fetch(`http://localhost:3000/notes/${note.id}`, {
      method: 'DELETE',
    })
    removeNote(note.id)
  }

  return (
    <div className='notes'>
      {note.note}
      <button onClick={handleDeleteNote}>
        <i className='fa-solid fa-minus'></i>
      </button>
    </div>
  )
}

export default HistoryNotes
