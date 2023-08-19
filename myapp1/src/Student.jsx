import React, {Component} from "react";
import "./Student.css";

class Student extends Component{  
 
  constructor(props){
    super(props);
    this.state = {
      name : "jiyaulla", 
      roll : this.props.roll
    }
  } 

  handleEventByArrowFunc = () => {
    console.log("this is arrow function", this )
    // setState is used to modify the state and props
    // this.setState({name : "Mohamad Hayat", roll : 125})  // setState take object as argument
    // this.state.name = "Mohamad Hayat"  // this will change the attribute but react wont recognize it
    
    this.setState((state, props) => {  // setState take take function as argument
      console.log("state are ", state);
      console.log("props are : ", props);
      return ({
      name :"Mahmad Hayat",
      roll : 100000
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Student Class Base Component</h2>
        <h4>Demonstration of seting the state</h4>
        <h2>Name : {this.state.name} </h2>
        <h2>Roll : {this.state.roll}</h2>
        <button onClick={this.handleEventByArrowFunc}>Click Me By Arrow Func</button> <br /><br />
      </div>
  );}
  
}


export default Student;   