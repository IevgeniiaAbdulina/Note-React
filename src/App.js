import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import NoteList from './components/NoteList';
import ReorderNotes from './components/ReorderNotes';

function App() {  
  return (
    <>
      <Header />
      <NoteList />
      <ReorderNotes />
      <Attribution />
    </>
  );
}

export default App;
