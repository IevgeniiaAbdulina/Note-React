
const Note = ({ note, completeHandler }) => {
    
    return ( 
        <div className="note">
            <div className="wrapper">
                <div onClick={completeHandler}
                    className={`mark ${!note.completed ? 'uncompleted' : 'completed'}`}
                ></div>
                <div className="title-note">{note.title}</div>
            </div>
            <div className="btn-delete"></div>
        </div>
     );
}
 
export default Note;