import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note"
import NotesDetails from "./NotesDetails";
import NotesFilter from "./NotesFilter";


const NoteList = () => {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        setNotesList(notes);
    }, [notes])

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

    const deleteHandler = (note) => {
        setNotes(notes.filter(item => item.id !== note.id))
    }

    const filterHandler = (selected) => {
        if(selected === 'active') {
            setNotesList([...notes.filter(item => item.completed === false)]);
        } else if(selected === 'completed') {
            setNotesList([...notes.filter(item => item.completed === true)]);
        } else if(selected === 'all') {
            setNotesList([...notes]);
        }
    }

    return ( 
        <>
            <NewNote 
                handleChange={handleChange} 
                handleSubmit= {handleSubmit}
                newNote={newNote}
            />
            <div className="note-list container">
                {notesList.map(note => 
                    <Note 
                        note={note} 
                        completeHandler={() => completeHandler(note)} 
                        deleteHandler={() => deleteHandler(note)}
                        key={note.id} 
                    />)
                }
                <NotesDetails filterHandler={filterHandler} />
            </div>
            <div className="layout-mobile">
                <NotesFilter />
            </div>
        </>
     );
}
 
export default NoteList;