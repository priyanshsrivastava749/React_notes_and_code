import { useState } from 'react'
import First from './components/First'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function clickHandler() {
    setCount(count+1)
  }
  function clickRemover() {
    if (count > 0) { setCount(count - 1) }
  }
  return (
    <>
      <First clickHandler={clickHandler} clickRemover={clickRemover}>
        <h1>{count}</h1>
      </First>
    </>
  );
}

export default App
