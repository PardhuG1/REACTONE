import React,{useState} from 'react'
import './App.css'
export const App = () => {
  const [name,setName] = useState("skillhub");
  return (
    <div >
      <h1>HELLO WOLD</h1>
      <h2>ALL IS WELL</h2>
      <button onClick={() => setName("clicked")}>Clickk Here</button>
      </div>
      )
    }
export default App