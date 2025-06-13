import { useState } from 'react'
import './App.css'
import Subscribe from './components/Subscribe'
import Comment from './components/Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Subscribe />
      <Comment/>
    </>
  )
}

export default App
