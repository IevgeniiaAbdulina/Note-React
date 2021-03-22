import './App.css';
import Header from './components/Header';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

function App() {
  return (
    <div>
      <Header />
      <NewNote />
      <NoteList />
    </div>
  );
}

export default App;
