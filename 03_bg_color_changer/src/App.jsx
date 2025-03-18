import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div class='container' style={{backgroundColor:color}}>
        <div class='bg_c_changer'>
          <button class='btn' onClick={()=>setColor('red')}style={{backgroundColor:'red'} } >Red</button>
          <button class='btn' onClick={()=>setColor('green')}style={{backgroundColor:'green'} }> Green</button>
          <button class='btn' onClick={()=>setColor('blue')}style={{backgroundColor:'blue'} }> Blue</button>
          <button class='btn' onClick={()=>setColor('olive')}style={{backgroundColor:'olive'} }> Olive</button>
          <button class='btn' onClick={()=>setColor('Gray')}style={{backgroundColor:'Gray'} }> Gray</button>
          <button class='btn' onClick={()=>setColor('Yellow')}style={{backgroundColor:'Yellow'} }> Yellow</button>
          <button class='btn' onClick={()=>setColor('Pink')}style={{backgroundColor:'Pink'} }> Pink</button>
          <button class='btn' onClick={()=>setColor('Purple')}style={{backgroundColor:'Purple'} }> Purple</button>
          <button class='btn' onClick={()=>setColor('Lavender')}style={{backgroundColor:'Lavender'} }> Lavender</button>
          <button class='btn' onClick={()=>setColor('White')}style={{backgroundColor:'White'} }> White</button>
          <button class='btn' onClick={()=>setColor('Black')}style={{backgroundColor:'black', color:'white',borderColor:'white'} }> Black</button>
        </div>
      </div>
    </>
  )
}

export default App
