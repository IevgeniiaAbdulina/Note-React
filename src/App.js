import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';
import NotesDetails from './components/NotesDetails';
import NotesFilter from './components/NotesFilter';
import ReorderNotes from './components/ReorderNotes';

function App() {
  return (
    <>
      <Header />
      <NewNote />
      <NoteList />
      {/* <NotesDetails /> */}
      <NotesFilter />
      <ReorderNotes />
      <Attribution />
    </>
  );
}

export default App;
