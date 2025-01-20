import Cards from "./componenets/cards"
import Button from "./componenets/Button"
import { useState } from "react"
function App() {
  const [count,setCount] = useState(0);

function handleClick() {
  setCount(count+1);
}

  return (
    <Button handleclick={handleClick}
    text="click me" >
    <h1>{count}</h1>
    </Button>
      // <Cards>
      //   <h1>i am frontend developer</h1>
      //   <p>my name is zainab bilal</p>
      //  </Cards>
  )
}

export default App
