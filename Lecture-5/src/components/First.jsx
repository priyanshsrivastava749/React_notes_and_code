import React from 'react'

const First = (props) => {
  return (
    <div>
      <p>{props.children}</p>
      <button onClick={props.clickHandler}>Click me!</button>
      <button onClick={props.clickRemover}>Click to Remove</button>
    </div>
  )
}

export default First