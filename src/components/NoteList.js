import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note"
import NotesFilter from "./NotesFilter";


const NoteList = ({colorMode}) => {
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
        const getNotesLeft = () => {
            setNotesLeft(notesList.filter(item => item.completed === false).length);
        }
        getNotesLeft();
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

    const clearCompletedNotes = () => {
        setNotes(notes.filter(item => item.completed === false))
    }


    
    /////////////////////////////////////////////////////////////////////////////////////
    // DRAG and DROP TO REORDER ITEMS ON THE LIST
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: []
    } 

    const DragToReorderList = () => {
        const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

        const onDragStart = (e) => {
            const initialPosition = Number(e.currentTarget.dataset.position);
    
            setDragAndDrop({
                ...dragAndDrop, 
                draggedFrom: initialPosition,
                isDragging: true,
                originalOrder: notesList
            });

            // Note: this is only for Firefox.
            e.dataTransfer.setData("text/html", '');
    
        }

        const onDragOver = (e) => {
            e.preventDefault();

            let newList = dragAndDrop.originalOrder;

            const draggedFrom = dragAndDrop.draggedFrom;

            const draggedTo = Number(e.currentTarget.dataset.position);

            const itemDragged = newList[draggedFrom];

            const remainingItems = newList.filter((item, index) => index !== draggedFrom);

            newList = [
                ...remainingItems.slice(0, draggedTo),
                itemDragged,
                ...remainingItems.slice(draggedTo)
            ];

            if(draggedTo !== dragAndDrop.draggedTo) {
                setDragAndDrop({
                    ...dragAndDrop,
                    updatedOrder: newList,
                    draggedTo: draggedTo
                })
            }
        }
    
        const onDrop = (e) => {
            setNotesList(dragAndDrop.updatedOrder);

            setDragAndDrop({
                ...dragAndDrop,
                draggedFrom: null,
                draggedTo: null,
                isDragging: false
            })
        }

        const onDragLeave = () => {
            setDragAndDrop({
                ...dragAndDrop,
                draggedTo: null
            })
        }



        return (
            <div className={`note-list container ${colorMode}`}>
                {notesList.map((note, index) => 
                        <Note 
                            note={note} 
                            completeHandler={() => completeHandler(note)} 
                            deleteHandler={() => deleteHandler(note)}
                            colorMode={colorMode}

                            key={index}
                            index={index}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            onDragLeave={onDragLeave}
                            classNameDnD={`${dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "drop-area" : ""}`}
                        />)
                }
                <div className={`notes-details ${colorMode}`}>
                    <div className="note-left">{notesLeft} Note left</div>
                    {windowWidth > 480 && (
                        <div className="layout-desktop">
                            <NotesFilter 
                                getFilter={filterHandler}
                                colorMode={colorMode}
                             />
                        </div>
                    )}
                    <div className={`clear-completed ${colorMode}`} onClick={clearCompletedNotes}>Clear completed</div>
                </div>
            </div>
        )
    }
    /////////////////////////////////////////////////////////////////////////////////////


    
    return ( 
        <>
            <NewNote 
                handleChange={handleChange} 
                handleSubmit= {handleSubmit}
                newNote={newNote}
                colorMode={colorMode}
            />
            {DragToReorderList()}
            {windowWidth < 480 && (
                <div className="layout-mobile">
                    <NotesFilter 
                        getFilter={filterHandler}
                        colorMode={colorMode}
                     />
                </div>
            )}
        </>
     );
}
 
export default NoteList;