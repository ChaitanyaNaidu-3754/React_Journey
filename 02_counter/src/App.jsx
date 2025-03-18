import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcount] = useState(0)

  return (
    <>
      <h1 id='counter'>Counter : {counter}</h1>
      <button onClick={() => {
        if(counter<20){
          setcount(counter+1)}
        }
        }>Add</button>
      <br></br>
      <button onClick={() => {
        if(counter>0){
          setcount(counter-1)}
        }
        }>Remove</button>
      <br></br>
      <button onClick={() => setcount(counter=0)}>Reset</button>
    </>
  )
}

export default App
