import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note"
import NotesFilter from "./NotesFilter";


const NoteList = () => {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [notesList, setNotesList] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    const [notesLeft, setNotesLeft] = useState(0);

    useEffect(() => {
        setNotesList(notes);
    }, [notes]);

    useEffect(() => {
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        }
    }, [windowWidth]);

    useEffect(() => {
        getNotesLeft()
    }, [notesList])

    const updateScreenSize = () => {
        let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
        setWindowWidth(windowWidth);
    }

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

    const getNotesLeft = () => {
        setNotesLeft(notesList.filter(item => item.completed === false).length);
    }

    const clearCompletedNotes = () => {
        setNotes(notes.filter(item => item.completed === false))
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
                <div className="notes-details">
                    <div className="note-left">{notesLeft} Note left</div>
                    {windowWidth > 480 && (
                        <div className="layout-desktop">
                            <NotesFilter getFilter={filterHandler} />
                        </div>
                    )}
                    <div className="clear-completed" onClick={clearCompletedNotes}>Clear completed</div>
                </div>
            </div>
            {windowWidth < 480 && (
                <div className="layout-mobile">
                    <NotesFilter getFilter={filterHandler} />
                </div>
            )}
        </>
     );
}
 
export default NoteList;