import React from 'react'
import img2 from './assets/img2.png'
import img1 from './assets/img1.jpg'
import img3 from './assets/img3.png'
import User_Card from "./components/User_Card"

const App = () => {
  return (
    <>
      <User_Card name="Priyansh" description="Programmer" image={img1} />
      <User_Card name="Anjali" description="Teacher" image={img2} />
      <User_Card name="Dr. Johny" description="Doctor" image={img3} />
    </>
  );
}

export default App