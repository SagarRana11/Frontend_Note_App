import React from 'react'
import { useState } from 'react'

const NoteForm = ({createNote}) => {
  const [newNote, setNewNote] = useState('')
  const addNote =(event)=>{
    event.preventDefault()
    createNote({
      content: newNote,
      important:true
    })
    setNewNote('')
  }
  return (
    <div className='noteForm'>
      <h2>Create a new note</h2>
      <form className='newNoteForm' onSubmit={addNote}>
      <input
          value={newNote}
          onChange={event=> setNewNote(event.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
