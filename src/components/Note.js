const Note = ({ note }) => {
    return ( 
        <div className="note">
            <div className="wrapper">
                <div 
                    className="mark uncompleted"
                    // className="mark completed"
                ></div>
                <div className="title-note">{note.title}</div>
            </div>
            <div className="btn-delete"></div>
        </div>
     );
}
 
export default Note;