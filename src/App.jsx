import { useState } from 'react'

import './App.css'
import { Save } from './api'

function App() {
  const [text, setText] = useState('')
  

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const save = () => {
    Save(text)
      .then((result) => {
        return result.json()
      })
      .catch((error) => {
        console.log("Error")
      })
  }

  return (
    <>
      <input id="input" type="text" value={text} onChange={handleChange} />
      <button onClick={save}>Save</button>
    </>
  )
}

export default App
