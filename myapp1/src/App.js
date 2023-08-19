import React, { Component } from "react";
import Student from "./Student";

const App = () => {
  return (
      <div>
        {/* passing the propert valid props */}
        <Student name="Jiyaulla" age={24} />
        {/* passing invalid props getting warning in console */}
        <Student name={10000000} age={24} />
        <Student age={24} />
      </div>
  )
}

export default App;
