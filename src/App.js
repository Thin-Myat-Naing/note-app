import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteLists from './components/NoteLists';

export default function App () {

  const[notes,setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=> {
    localStorage.setItem("notes", JSON.stringify(notes));
  },["notes"]);

  const addNote = (text) => {
    const newNote = {id: Date.now, text};
    setNotes([newNote, ...notes]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

   return (
    <div className='min-h-screen bg-amber-100 p-4'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-center'>📝 My Note</h1>
       <NoteForm addNote={addNote}/>
       <NoteLists deleteNote={deleteNote} notes={notes} setNotes={setNotes}/>
      </div>
    </div>
   )
}