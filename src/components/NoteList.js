import { useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note"
import NotesDetails from "./NotesDetails";
import NotesFilter from "./NotesFilter";


const NoteList = () => {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleChange = (e) => {
        setNewNote(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            {
                title: newNote,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setNewNote('');
        console.log('[NewNote] handleSubmit, note: ', newNote)
    }

    return ( 
        <>
            <NewNote 
                handleChange={handleChange} 
                handleSubmit= {handleSubmit}
                newNote={newNote}
            />
            <div className="note-list container">
                {notes.map(note => <Note note={note} />)}
                <NotesDetails />
            </div>
            <div className="layout-mobile">
                <NotesFilter />
            </div>
        </>
     );
}
 
export default NoteList;