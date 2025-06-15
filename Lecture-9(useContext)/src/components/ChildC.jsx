import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App'
const ChildC = () => {
  const user = useContext(UserContext);
  return (
    <div>I love you {user.name} with love from Nafeesa</div>
  )
}

export default ChildC