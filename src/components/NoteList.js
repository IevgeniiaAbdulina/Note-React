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

    // const dropArea = document.getElementById('drop-area');
    // const dropItem = document.getElementById('drop-item');

    useEffect(() => {
        setNotesList(notes);
    }, [notes]);

    // Drag and Drop Start  _______________________________
    // useEffect(() => {
    //     if(notes.length < 1) {
    //         return
    //     } else {
    //         dropArea.addEventListener('dragstart', (event) => {
    //             event.target.style.opacity = '0.4';
    //             // event.dataTransfer.effectAllowed = 'move';
    //             // event.dataTransfer.setData('text/html', dropItem.innerHTML);
    //            console.log('event: ', event.type)

    //         });

    //         dropArea.addEventListener('dragover', (event) => {
    //             event.preventDefault();
    //             event.target.classList.add('over');
    //             console.log('event: ', event.type)
    //         });

            
    //         dropArea.addEventListener('dragleave', (event) => {
    //             event.target.classList.remove('over');
    //             console.log('event: ', event.type)
    //         });
        
    //         dropArea.addEventListener('dragend', (event) => {
    //             event.target.style.opacity = '1';
    //             console.log('event: ', event.type)
    //         });

    //         dropArea.addEventListener('drop', (event) => {
    //            console.log('event: ', event.type)
    //         });

    //         const handleDrop = (e) => {
    //             e.stopPropagation();
    //             e.preventDefault();
    //             if(!dropItem) {
    //                 return
    //             } else {
    //                return dropItem.innerHTML = e.dataTransfer.getData('text/html');
    //             }
    //         }
    //     }
    // }, [notes, dropArea, dropItem]);

    useEffect(() => {
       if(notes.length < 1) {
        return
       } else {
        dragAndDrop();
       }
    }, [notes])

    const dragAndDrop = () => {
        let dragEl;

        const dragStart = (e) => {
            console.log('dragEl  ', dragEl)
            console.log('e.target  ', e.target.id)
             e.target.style.opacity = '0.4';

             dragEl = e.target;
             e.dataTransfer.effectAllowed = 'move';
             e.dataTransfer.setData('text/html', e.target.innerHTML);
        }

        const dragOver = (e) => {
            if(e.preventDefault()) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        const dragEnter = (e) => {
            e.target.classList.add('over');
        }

        const dragLeave = (e) => {
            e.target.classList.remove('over');
        }

        const dragDrop = (e) => {
            console.log('dragEl  ', dragEl)
            console.log('e.target  ', e.target.id)
            if(e.stopPropagation()) {
                e.stopPropagation();  // stop the browser from redirecting
            }

            if(dragEl !== e.target) {
                dragEl.innerHTML = e.target.innerHTML;
                e.target.innerHTML = e.dataTransfer.getData('text/html');
            }
            

            return false;
        }

        
        const dragEnd =(e) => {
            e.target.style.opacity = '1';

            items.forEach((item) => {
                item.classList.remove('over');
            })
        }

        let items = document.querySelectorAll('.drop-area .drop-item');
        if(items === null) {
            return
        } else {
            items.forEach((item) => {
                console.log("ITEM: ", item)
                item.addEventListener('dragstart', dragStart, false);
                item.addEventListener('dragenter', dragEnter, false);
                item.addEventListener('dragover', dragOver, false);
                item.addEventListener('dragleave', dragLeave, false);
                item.addEventListener('drop', dragDrop, false);
                item.addEventListener('dragend', dragEnd, false);
            })
        }
    }
    //  DnD End ____________________________________________

    useEffect(() => {
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        }
    }, [windowWidth]);

    useEffect(() => {
        getNotesLeft()
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

    
   
    return ( 
        <>
            <NewNote 
                handleChange={handleChange} 
                handleSubmit= {handleSubmit}
                newNote={newNote}
                colorMode={colorMode}
            />
            <div className={`note-list container ${colorMode} drop-area`}>
                {notesList.map(note => 
                        <Note 
                            note={note} 
                            completeHandler={() => completeHandler(note)} 
                            deleteHandler={() => deleteHandler(note)}
                            key={note.id} 
                            colorMode={colorMode}
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