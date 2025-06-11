import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="clicker_content_box">
      <p>You Clicked This {count} Number of Times</p>
      <button onClick={() => {setcount(count+1)}}>Click Me!</button>
    </div>
  );
};

export default Counter;
