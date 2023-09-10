import React, { useState, useEffect } from 'react'
import useCustomCounter from './Custom';


function App() {
  const data = useCustomCounter();
  const data1 = useCustomCounter();
  
  
  return (
  <div>
    <h3>Custom Hook Count Up {data.count}</h3>
    <button type="button" onClick={data.handleIncrement}>Increment </button>
    <h3>Custom Hook Count Up {data1.count}</h3>
    <button type="button" onClick={data1.handleIncrement}>Increment </button>
  </div>);
}

export default App;