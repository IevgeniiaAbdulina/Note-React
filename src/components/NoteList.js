import Note from "./Note"
import NotesDetails from "./NotesDetails";
import NotesFilter from "./NotesFilter";

const NoteList = () => {
    return ( 
        <div className="note-list container">
            <Note />
            <Note />
            <Note />
            <NotesDetails />
        </div>
     );
}
 
export default NoteList;