import React, { useState } from 'react'


function App() {
  const [name, setName] = useState("Rahul");
  const [roll, setRoll] = useState(10)

    
  const handleClick = () => {
    console.log("handle click here---------------------")
    setName("Geeky Shows")
    setRoll(10000000)
  }



  return (
  <div>
    <h2>Name: {name} Roll:{roll}</h2>
    <button type='button' onClick={handleClick}>Click Here</button>
  </div>);
}

export default App;