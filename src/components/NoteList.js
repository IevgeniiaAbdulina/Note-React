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
        getNotesLeft();
    }, [notesList, notesLeft])

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
        // We'll use the initialDndState created above
        const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

        const onDragStart = (e) => {
            // It receives a DragEvent
            // which inherits properties from
            // MouseEvent and Event
            // so we can access the element
            // through event.currentTarget
    
            // Later, we'll save
            // in a hook variable
            // the item being dragged
    
            console.log('onDragStart');
    
            // We'll access the "data-position" attribute
            // of the current element dragged
            const initialPosition = Number(e.currentTarget.dataset.position);
            console.log('initialPosition', initialPosition)
    
            setDragAndDrop({
                 // we spread the previous content
                // of the hook variable
                // so we don't override the properties 
                // not being updated
                ...dragAndDrop, 
    
                draggedFrom: initialPosition, // set the draggedFrom position
                isDragging: true,
                originalOrder: notesList // store the current state of "list"
            });

            console.log("dragAndDrop: ", dragAndDrop)

            // Note: this is only for Firefox.
            e.dataTransfer.setData("text/html", '');
    
        }

        const onDragOver = (e) => {
            // It also receives a DragEvent.
            // Later, we'll read the position
            // of the item from event.currentTarget
            // and store the updated list state
    
            // We need to prevent the default behavior
            // of this event, in order for the onDrop
            // event to fire.
            // It may sound weird, but the default is
            // to cancel out the drop.
    
            e.preventDefault();
            console.log('onDragOver');

            // Store the content of the original list
            // in this variable that we'll update
            let newList = dragAndDrop.originalOrder;
            console.log('newList: ', newList);

            // index of the item being dragged
            const draggedFrom = dragAndDrop.draggedFrom;
            console.log('draggedFrom: ', draggedFrom);

            // index of the drop area being hovered
            const draggedTo = Number(e.currentTarget.dataset.position);
            console.log('draggedTo: ', draggedTo);

            // get the element that's at the position of "draggedFrom"
            const itemDragged = newList[draggedFrom];
            console.log('itemDragged: ', itemDragged);

            // filter out the item being dragged
            const remainingItems = newList.filter((item, index) => index !== draggedFrom);

            // update the list
            newList = [
                ...remainingItems.slice(0, draggedTo),
                itemDragged,
                ...remainingItems.slice(draggedTo)
            ];

            // check if the targets are different
            if(draggedTo !== dragAndDrop.draggedTo) {
                setDragAndDrop({
                    ...dragAndDrop,

                    // save the updated list state
                    // we will render this onDrop
                    updatedOrder: newList,
                    draggedTo: draggedTo
                })
            }

        }
    
        const onDrop = (e) => {
            // Here, we will:
            // - update the rendered list
            // - and reset the DnD state
            console.log('onDrop');

            // we use the updater function
            // for the "list" hook
            setNotesList(dragAndDrop.updatedOrder);

            // and reset the state of the DnD
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