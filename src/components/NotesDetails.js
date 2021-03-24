import NotesFilter from "./NotesFilter";

const NotesDetails = () => {
    return ( 
        <div className="notes-details">
            <div className="note-left">Note left</div>
            <div className="layout-desktop">
                <NotesFilter />
            </div>
            <div className="clear-completed">Clear completed</div>
        </div>
     );
}
 
export default NotesDetails;