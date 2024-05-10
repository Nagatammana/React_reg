
import { useState } from "react"
function App() {
const [count,setcount]= useState(0);
function decrementvalue(){
  setcount(prevcount=>prevcount-1);
}
function incrementvalue(){
  setcount(prevcount=>prevcount+1);
}
  return (
  <center>
    <>
    <button onClick={decrementvalue}>-</button>
    <span>{count}</span>
    <button onClick={incrementvalue}>+</button>
    </>
    </center>
  )
}

export default App
