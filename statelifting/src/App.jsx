import { useState } from "react"
// import Card from "./components/Card"
import Panel from "./components/Panel"

function App() {
//  const [name,namevalue] = useState('')
  //  <Card name={name} namevalue={namevalue} />
  const[value,setvalue]= useState(0)
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel 
      title= "About"
      isActive={value === 0}
      onshow={() => setvalue(0)} >
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus, laborum similique ex id quasi tempora! Sequi, in eaque? Ipsum.naksjbciugeviwefuvjbwvwfiuegvfuiwehfvbjsedjcbebfuiq2ieufiqwhfjkqwnbcjqwbiufgiuqefioqwhdjkcnwsjbcqwigfiuw
</Panel>
       
        <Panel 
      title ="embrology"
      isActive={value === 1}
      onshow={() => setvalue(1)} > 
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus, laborum similique ex id quasi tempora! Sequi, in eaque? Ipsum.jcnqwldjpowferuyf7trgfvbsdjcblqjwdpqwrfywe7tfuwegbfjkqwndp qi2djyubhciqwufcouwe8yf8eygjbvwevcqwufhiqyfdoiwhjcbsdvcivweygfuoqedjb
</Panel>
       

    </div>
  )
}
 
export default App
