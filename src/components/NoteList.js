import Note from "./Note"

const NoteList = () => {
    return ( 
        <div className="note-list">
            <Note />
            <Note />
            <Note />

            <div>
                <div className="note-left">Note left</div>
                <div className="clear-completed">Clear completed</div>
            </div>
            <div className="filters">All Active Completed</div>
        </div>
     );
}
 
export default NoteList;