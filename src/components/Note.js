const Note = () => {
    return ( 
        <div className="note">
            <div className="wrapper">
                <div 
                    className="mark uncompleted"
                    // className="mark completed"
                ></div>
                <div className="title-note">10 minutes meditation</div>
            </div>
            <div className="delete-note"></div>
        </div>
     );
}
 
export default Note;