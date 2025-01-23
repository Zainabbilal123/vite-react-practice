import React, { useState } from 'react'

function Panel({
    title,
    children,
    isActive,
    onshow
})  {
 return (
    
    
<section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onshow}>
          Show
        </button>
      )}
    </section>

 )
}

export default Panel
