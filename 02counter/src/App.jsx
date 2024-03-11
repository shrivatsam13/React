import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () =>{
    setCounter( counter + 1)
    //using callback function we can increase counter many a times in single run
    // setCounter( (prevCount) => prevCount + 1)
    // setCounter( (prevCount) => prevCount + 1)
    // setCounter( (prevCount) => prevCount + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React learning</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button> {" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>Checking to see if counter is updated here as well: {counter}</p>
    </>
  )
}

export default App
