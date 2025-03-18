import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setlength] = useState(8)
  const [numbersAllow,setnumbersAllow] = useState(false)
  const [charsAllow,setcharsAllow] = useState(false)

  const passwordRef = useRef(null)

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllow) str += "0123456789"
    if (charsAllow) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)   
    }
    setPassword(pass)
  }, [length, numbersAllow, charsAllow, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllow, charsAllow, passwordGenerator])

  return (
    <>
      <div class='content'>
        <div class='mainheading'>
          <p class='heading'>Password Generator</p>
        </div>
        <div class='bar'>
          <input class='password' type='text' value={password} ref={passwordRef}></input>
          <button class='copy' onClick={copyToClipBoard}>copy</button>
        </div>
        <div class='parameters'>

          <label htmlFor="length">Length :{length}</label>
          <input class='length'type='range' value={length} min={8} max={100} id='length' onChange={(e) => { setlength(e.target.value)}}></input>

          <input class='numbersallow' type='checkbox' id='numbersallow'  value={numbersAllow} onChange={() => {setnumbersAllow((prev) => !prev)}}></input>
          <label htmlFor="numbersallow">Numbers</label>

          <input class='charsallow' type='checkbox' id='charsallow' value={charsAllow}  onChange={() => {setcharsAllow((prev) => !prev)}}></input>
          <label htmlFor="charsallow">Characters</label>

        </div>
      </div>
      
    </>
  )
}

export default App
