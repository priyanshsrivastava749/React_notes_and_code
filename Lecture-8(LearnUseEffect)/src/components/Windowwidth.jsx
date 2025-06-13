import React, { useEffect, useState } from 'react'

const Windowwidth = () => {
  const [windowwidth, GetWindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      GetWindowwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('unmounted the Windowwidth component')
    }
  }, []);
  
  return (
    <div>
      window width is {windowwidth}
    </div>
  )
}

export default Windowwidth