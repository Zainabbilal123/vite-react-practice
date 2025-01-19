import React, { useState } from 'react'

const Counter = () => {
    const [count , setcount] = useState(0)
  return (
    <div className='text-center justify-center items-center outline-black border-slate-50 rounded-md '>
   
    
      <p className='text-center justify-center items-center text-color-blue'>you have clicked {count} times</p>
      <button onClick={() => {setcount(count+1)}}>Clicked me</button>
    </div>
  )
}

export default Counter
