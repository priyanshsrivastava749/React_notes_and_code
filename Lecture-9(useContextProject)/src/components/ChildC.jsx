import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    if (theme === "Light") {
      setTheme('Dark')
    }
    else {
      setTheme('Light')
    }
  }
  return (
    <div>
      <button onClick={toggleTheme}>CHANGE THEME</button>
    </div>
  )
}

export default ChildC