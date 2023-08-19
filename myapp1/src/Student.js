import React from "react";
import "./Student.css"

const Student = props => {
  return (
    <div>
      <h4>This is function base component and example for passing the props</h4>
      <h2>Name : {props.name} </h2>
      <h2>Age : {props.age} </h2>
    </div>
  )
}

export default Student;