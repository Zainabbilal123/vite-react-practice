import React from 'react'
import Image1 from '../assets/th.jpg'
import "./Usercard.css"

const Usercard = (props) => {
  return (
    <div className='user-container'>
      <h1 id='user-name'>{props.name}</h1>
      <img  id='user-image'src={Image1} ></img>
      <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default Usercard
