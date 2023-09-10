import React, {Component} from "react";
import "./Student.css";
import Marks from "./Marks";

class Student extends Component{  
   
  // lifecycle method Updating
  // constructor will always call first during mounting
  constructor(props){
    super(props);
    console.log("component constructor called -------------- student 1")
    this.state = {
      roll : 101 
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("component getderivedstatefromprops method-------------- student 2")
    // you can log here here what you want and you can do whatever you want
    return null;
  }

  componentDidMount() {
    console.log("component did mount ----------------- student 4")
  }
  clickHandler = () => {
    console.log("button clicked ")
    this.setState({roll:102})
  }
  
  render() {
    console.log("component render called ------------------ student 3")
    return (
      <div>
        <h2>Student Class Base Component</h2>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandler}>Change State</button>
      </div>
  );}
  
}


export default Student;   