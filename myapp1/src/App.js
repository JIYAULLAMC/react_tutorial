import React, { Component } from "react";
import Student from "./Student";
import StudentFuncComp from "./StudentFuncComp";

const App = () => {
  return (
      <div>
        <Student roll={25} />
        <hr />
        <StudentFuncComp roll={123} />        
      </div>
  )
}

export default App;
