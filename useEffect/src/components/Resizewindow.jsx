import React, { useEffect, useState } from 'react'

function Resizewindow  ()  {
    const[windowwidth,setwindow] = useState(window.innerWidth)
useEffect(() => {
    const handlesize = () => 
        setwindow(window.innerWidth);
        window.addEventListener("resize", handlesize);
    
    return (() => {
        window.removeEventListener("resize" , handlesize);
    })
})
  return (
    <div>
     <h1> window{windowwidth}px</h1>
    </div>
  )
}

export default Resizewindow
