import React, { useState, useEffect } from 'react'
import useCustomCounter from './Custom';


function App() {
  const data = useCustomCounter();
  
  
  return (
  <div>
    <h3>Custom Hook Count Up {data.count}</h3>
    <button type="button" onClick={data.handleIncrement}>Increment </button>
  </div>);
}

export default App;