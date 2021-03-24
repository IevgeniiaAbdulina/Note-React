
const NewNote = ({ handleChange, handleSubmit, newNote }) => {
    return ( 
        <div className="new-note">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className='container'
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