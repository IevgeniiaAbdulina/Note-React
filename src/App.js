import { useState } from "react";

import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import NoteList from './components/NoteList';
import ReorderNotes from './components/ReorderNotes';

function App() {  
    const [colorMode, setColorMode] = useState('dark-mode');
    const bodyElement = document.body;

    const toggleColorMode = () => {
      if(colorMode === 'light-mode') {
        setColorMode('dark-mode');
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
      } else if(colorMode === 'dark-mode') {
        setColorMode('light-mode');
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
      }
    }

  return (
    <>
      <Header toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <NoteList colorMode={colorMode} />
      <ReorderNotes />
      <Attribution />
    </>
  );
}

export default App;
