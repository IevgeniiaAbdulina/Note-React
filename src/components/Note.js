
const Note = ({ note, completeHandler, deleteHandler }) => {
    
    return ( 
        <div className="note">
            <div className="wrapper">
                <div onClick={completeHandler}
                    className={`mark ${!note.completed ? 'uncompleted' : 'completed'}`}
                ></div>
                <div className="title-note">{note.title}</div>
            </div>
            <div onClick={deleteHandler} className="btn-delete"></div>
        </div>
     );
}
 
export default Note;