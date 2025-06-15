import { useState } from 'react'
import './App.css'
import { createContext } from 'react';
import ChildA from './components/ChildA';

const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('Light');
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id="content" style={{backgroundColor:theme==='Light'?"aquamarine":"black"}}>
          <ChildA></ChildA>
        </div>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
export { ThemeContext }
