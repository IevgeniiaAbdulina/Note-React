import {useState} from "react";

const NotesFilter = () => {
    const [selectedItem, setSelectedItem] = useState('all');

    const filterNotes = (selected) => {
        setSelectedItem(selected);
    }
    
    return ( 
        <div className="notes-filter container">
            <div onClick={() => filterNotes('all')} className={`notes-all ${selectedItem === 'all' ? 'selected' : ''}`}>All</div>
            <div onClick={() => filterNotes('active')} className={`notes-active ${selectedItem === 'active' ? 'selected' : ''}`}>Active</div> 
            <div onClick={() => filterNotes('completed')} className={`notes-completed ${selectedItem === 'completed' ? 'selected' : ''}`}>Completed</div> 
        </div>
     );
}
 
export default NotesFilter;