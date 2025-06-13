import React from 'react'
import { useState } from 'react'
import './Subscribe.css'
const Subscribe = () => {
  const [subscriber, Subscriber_count] = useState(0)
  function subscriber_manager() {
    Subscriber_count(subscriber + 1)
    alert('NEW SUBSCRIBER ADDED')
  }
  return (
    <div>
      <button className="Subscribe-btn" onClick={subscriber_manager}>
        Subscribe!
      </button>
      <p>Subcribers:{subscriber}</p>
    </div>
  );
}

export default Subscribe