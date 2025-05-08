import React, { useState } from 'react';

export default function NoteForm ({addNote}) {
   const [text, setText] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if(!text.trim()) return;
      addNote(text);
      setText("");
   }
   return (
      <form onSubmit={handleSubmit}>
         <input
            value={text}
            placeholder='Write a note .....'
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded w-full rounded bg-indigo-50 p-4 shadow border-black"
         />
         <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Add Note
         </button>
         </form>
   )
}