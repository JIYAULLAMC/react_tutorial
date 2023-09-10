import React, { useState, useEffect } from 'react'


function App() {
  const [upcount, setUpcount] = useState(0);
  const [downcount, setDowncount] = useState(1000);
    
  const increasCount = () => {
    console.log("increse+++++++++++++++++++")
    setUpcount(upcount+10)
  }
    
  const decreasCount = () => {
    console.log("decrese click here---------------------")
    setDowncount(downcount-10)
  }

  useEffect(()=> {
    console.log("use effect is called here************")
  }, [upcount])
  // the second parameter as array will take states 
  // useEffect will run after only array states will get change 
  // mean on change upcount useeffect will run for downcount changes it will not run or exicute

  return (
  <div>
    <h2>Count Up: {upcount}</h2>
    <button type='button' onClick={increasCount}>Increase By 10</button>
    <h2>Count Down: {downcount}</h2>
    <button type='button' onClick={decreasCount}>Decrease By 10</button>
  </div>);
}

export default App;