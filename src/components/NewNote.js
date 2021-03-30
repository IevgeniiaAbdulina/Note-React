
const NewNote = ({ handleChange, handleSubmit, newNote, colorMode }) => {
    return ( 
        <div className={`new-note ${colorMode}`}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className={`container ${colorMode}`}
                    type="text" 
                    placeholder='Create a new note...'
                    value={newNote}
                    onChange={(e) => handleChange(e)}
                />
             </form>
        </div>
     );
}
 
export default NewNote;