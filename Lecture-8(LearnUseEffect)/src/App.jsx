import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Windowwidth from './components/Windowwidth';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   first this is the side effect function or logic
  
  //   return () => {
  //     second cleanup function
  //   }
  // }, [third]) comma seperated dep List means the function is triggered when we change this value
  
  //variation:1 this would run on each render
  //Runs on every render
  // useEffect(() => {
  // alert('I will run on each render')
  // })
  //VARIATION:2 IT WOULD RUN ON EACH UPDATION OF COUNT
  // useEffect(() => {
  //    alert('count changed')
  // }, [count])

  // // variation:3 this block of code would run only for first render
  // useEffect(() => {
  //   alert('THIS WOULD RUN ON FIRST RENDER ONLY')
  // }, [])
  function CountHandle() {
    setCount(count + 1);
}
  //VARIATION:4 THIS WOULD RUN ON EACH UPDATION OF COUNT AND TOTAL MULTIPLE DEPENDENCIES
  function countHandle() {
    setCount(count + 1);
  }
  // function totalHandle() {
  //   setTotal(total + 1);
  // }
  // useEffect(() => {
  //   alert('count or total changed');
  // }, [total,count])
  useEffect(() => {
    alert("count is updated")
    return () => {
      alert("count is unmounted from UI")
    }
  }, [count])
  
  return (
    <>
      
      
      {/* <button onClick={countHandle}>Click Me!</button>
      <p>Count:{count}</p>
      {/* <button onClick={totalHandle}>Click Me!</button>
      <p>Total:{total}</p> */}
      <Windowwidth/>
    </>
  );
}

export default App
