
const Note = ({ note, completeHandler, deleteHandler, colorMode }) => {
    
    return ( 
        <div className={`note ${colorMode}`}>
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