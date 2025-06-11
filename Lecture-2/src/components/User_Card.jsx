import React from 'react'
import './user_card.css'

const User_Card = (data) => {
  return (
    <div className='user_card_container' style={data.style}>
      <h1>{data.name}</h1>
      <img src={data.image} alt="img" />
      <p>{data.description}</p>
    </div>
  )
}

export default User_Card