import {useState} from "react";

const NotesFilter = ({getFilter, colorMode}) => {
    const [selectedItem, setSelectedItem] = useState('all');

    const filterNotes = (selected) => {
        setSelectedItem(selected);
        getFilter(selected);
    }
    
    return ( 
        <div className={`notes-filter container ${colorMode}`}>
            <div onClick={() => filterNotes('all')} className={`notes-all ${selectedItem === 'all' ? 'selected' : ''} ${colorMode}`}>All</div>
            <div onClick={() => filterNotes('active')} className={`notes-active ${selectedItem === 'active' ? 'selected' : ''} ${colorMode}`}>Active</div> 
            <div onClick={() => filterNotes('completed')} className={`notes-completed ${selectedItem === 'completed' ? 'selected' : ''} ${colorMode}`}>Completed</div> 
        </div>
     );
}
 
export default NotesFilter;