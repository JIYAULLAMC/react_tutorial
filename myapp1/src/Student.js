import React, {Component} from "react";
import "./Student.css";
import PropTypes  from 'prop-types';

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

// assinging to send proper data types props while calling the component
Student.propTypes = {
 // name : PropTypes.string,  // name need string type
  name : PropTypes.string.isRequired,  // name is required positional argument if not passed will get warning error in  console
  age : PropTypes.number,  // age need number type
}

// passing the default props to Student component 
Student.defaultProps = {
  name : "Guest",
}

export default Student;