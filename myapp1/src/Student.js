import React, {Component} from "react";
import "./Student.css"

class Student extends Component{
  render() {
    return (
      <div>
        <h4>This is function base component and example for passing the props</h4>
        <h2>Name : {this.props.name} </h2>
        <h2>Age : {this.props.age} </h2>
      </div>
   );
  }
}

export default Student;