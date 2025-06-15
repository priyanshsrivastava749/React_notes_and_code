import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
//step1: create context
const UserContext = createContext(); 
function App() {
  //step2: wrap all the content inside a Provider
  //step3: pass value
  const [user, setUser] = useState({
    name: "priyansh"
  });
  //step4: consumer k ander jaake consume karo

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA></ChildA>
      </UserContext.Provider>
    </>
  );
}

export default App
export {UserContext}
