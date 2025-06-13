import { useState } from 'react'
import './App.css'
import Searchbox from './components/searchbox'

function App() {
  const [sentence, changeSentence] = useState('');

  return (
    <>
      <Searchbox
        c_number = "first"
        sentence={sentence}
        changeSentence={changeSentence}
      ></Searchbox>
      <Searchbox
        c_number="second"
        sentence={sentence}
        changeSentence={changeSentence}
      ></Searchbox>
    </>
  );
}

export default App
