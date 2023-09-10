import React from 'react'
import User from './User';
import Guest from './Guest';

function App(props) {

  console.log("-------------",props.isUser)
  if (props.isUser) {
    return (
      <div>
        <h3> User  </h3>
        <User />
      </div>);
  }
  return (
    <div>
      <h3>Guest </h3>
      <Guest />
    </div>
  )
  
}

export default App;