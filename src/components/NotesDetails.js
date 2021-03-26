import NotesFilter from "./NotesFilter";

const NotesDetails = ({filterHandler}) => {
    return ( 
        <div className="notes-details">
            <div className="note-left">Note left</div>
            <div className="layout-desktop">
                <NotesFilter getFilter={filterHandler} />
            </div>
            <div className="clear-completed">Clear completed</div>
        </div>
     );
}
 
export default NotesDetails;