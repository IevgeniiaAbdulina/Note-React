const NewNote = () => {
    return ( 
        <div className="new-note">
            <input 
                className='container'
                type="text" 
                // placeholder='Create a new note...'
                value='Create a new note...'
             />
        </div>
     );
}
 
export default NewNote;