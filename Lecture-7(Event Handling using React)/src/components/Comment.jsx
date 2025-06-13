import React from 'react'
import './comment.css'
const Comment = () => {
  function handleSubmit(e){
    e.preventDefault();
    console.log('NEW POST ADDED')
  }
  function handleCommentbox(e) {
    console.log(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleCommentbox} />
      <button>Post</button>
    </form>
  );
}

export default Comment