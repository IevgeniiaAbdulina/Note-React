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
                id: Math.floor( Math.random() * 1000)
            }
        ])
        setNewNote('');
    }

    const completeHandler = (note) => {
        setNotes(notes.map(item => {
            if(item.id === note.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return ( 
        <>
            <NewNote 
                handleChange={handleChange} 
                handleSubmit= {handleSubmit}
                newNote={newNote}
            />
            <div className="note-list container">
                {notes.map(note => 
                    <Note 
                        note={note} 
                        completeHandler={() => completeHandler(note)} 
                        key={note.id} 
                    />)
                }
                <NotesDetails />
            </div>
            <div className="layout-mobile">
                <NotesFilter />
            </div>
        </>
     );
}
 
export default NoteList;