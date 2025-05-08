import React,{useState} from 'react';

export default function NoteLists ({notes, deleteNote, setNotes}) {
   const [editingId, setEditingId] = useState(null);
   const [editingText, setEditingText] = useState("");

   const handleSave = (id) => {
      const updatedNote = notes.map(note => 
         note.id ===id ? {...note, text: editingText } : note
      );
      setNotes(updatedNote);
      setEditingId(null);
   }
   return (
      <div className='space-y-3 pt-3'>
      {notes.map(note => (
            <div key={note.id} className='rounded bg-indigo-50 p-4 border border-black shadow flex justify-between'>
               {editingId === note.id ? (
                  <>
                     <input 
                        className='w-80 px-3 py-1 border rounded border-blue shadow'
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)} 
                     />
                     <button 
                     onClick={() => {handleSave(note.id)}}
                     className='text-blue-500 hover:text-blue-700 font-bold'>Save</button>

                     <button 
                     onClick={() => {setEditingId(null)}}
                     className='text-blue-500 hover:text-blue-700 font-bold'>Cancel</button>

                  </>
               ):(
                  <>
                     <span className="w-80">{note.text}</span>
                     
                     <button 
                     onClick={() => {
                        setEditingId(note.id);
                        setEditingText (note.text);
                     }}
                     className='text-blue-500 hover:text-blue-700 font-bold'>Edit</button>
                     
                     <button
                     onClick={() => {
                        if(window.confirm("Are you sure want to delete it?")) {
                              deleteNote(note.id)
                           }
                     }}
                     className='text-red-500 hover:text-red-700 font-bold'>Delete</button>
               </>
               )}
              </div> 
         ))}
      </div>
   )
}