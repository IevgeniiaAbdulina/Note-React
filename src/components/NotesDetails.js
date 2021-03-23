const NotesDetails = () => {
    return ( 
        <div className="notes-details">
            <div className="note-left">Note left</div>
            <div className="layout-desktop">
                <div className="notes-all">All</div>
                <div className="notes-active">Active</div> 
                <div className="notes-completed">Completed</div> 
            </div>
            <div className="clear-completed">Clear completed</div>
        </div>
     );
}
 
export default NotesDetails;