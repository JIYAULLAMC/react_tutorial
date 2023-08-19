import React, {Component} from "react";
import "./Student.css";
import PropTypes  from 'prop-types';

class Student extends Component{
  // defining the state inside the constructor as same as previous results also same
  constructor(props){
    super(props)
    this.state = {
      name : "Jiyaulla",
      age : this.props.age
    }
  }
    render() {
    return (
      <div>
        <h4>This is class base component and example for passing state and props</h4>
        <h2>state by class component : Name : {this.state.name} </h2>
        <h2>props of object as state by class component Age : {this.state.age} </h2>
        <h2>pure props sent by object : {this.props.age}</h2>
      </div>
   );
  }
}


export default Student;