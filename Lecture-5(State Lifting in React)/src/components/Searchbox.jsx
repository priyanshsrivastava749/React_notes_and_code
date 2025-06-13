import React from 'react'
import './searchbox.css'

const Searchbox = (props) => {
  return (
    <div className="Containerdiv">
      <input
        type="text"
        onChange={(e) => {
          props.changeSentence(e.target.value);
        }}
      />
      <p>You have typed: {props.sentence}</p>
    </div>
  );
}

export default Searchbox