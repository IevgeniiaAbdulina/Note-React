
const Note = ({ note, index, completeHandler, deleteHandler, colorMode, onDragStart, onDragOver, onDrop, onDragLeave, classNameDnD }) => {
    
    return ( 
        <div 
            className={`note ${colorMode} ${classNameDnD}`} 

            draggable='true'  
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            data-position={index}
            onDragLeave={onDragLeave}
            >
            <div className="wrapper">
                <div onClick={completeHandler}
                    className={`mark ${!note.completed ? 'uncompleted' : 'completed'} ${colorMode}`}
                ></div>
                <div className={`title-note ${colorMode}`}>{note.title}</div>
            </div>
            <div onClick={deleteHandler} className="btn-delete"></div>
        </div>
     );
}
 
export default Note;