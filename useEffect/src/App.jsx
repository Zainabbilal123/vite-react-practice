import { useState } from "react"
import { useEffect } from "react"
// import TimmerComponents from "./components/TimmerComponents"
import Resizewindow from "./components/ResizeWindow"


function App() {
  // const[count,setcount] = useState(0)
  // const [total,settotal] = useState(1)
  // render on every variatio n
//  useEffect(() => {
//  alert("we are using useEffect")
// })

// variation 2 that runs on only 1 render
// useEffect( () => {
//   alert("that runs on only 1 render");}, []
// )

// that render on variable name
// useEffect(() =>{
//   alert("render on every count")
// }, [count])

// variation 4 multiple times render
// useEffect(() =>{
//   alert("render on every count or total")
// },[count,total])

//  function handlechange () {
//   setcount(count+1);
//  }
//  function handlechangetotal () {
//   settotal(total+1) }
 
 
  return (
    <>
  
    <Resizewindow/>
   
     {/* <button onClick={handlechange}>click</button>
     count is {count}
     <br></br>
     <button onClick={handlechangetotal}>click</button>
     total is {total} */}
     
    </>
  )
}

export default App
