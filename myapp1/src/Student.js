import React, {Component} from "react";
import "./Student.css";

class Student extends Component{  
 
  constructor(props){
    super(props);
    this.state = {
      name : "jiyaulla", 
      roll : this.props.roll
    }
    //binding this object inside the normal function
    // this is because we want use the state and props assiciated with present class iside the normal fuction
    // if we did not bind then no access to the this if do not have access then we cant access state or props of component
    this.normalFunc = this.normalFunc.bind(this)
  } 

  normalFunc() {
    console.log("binding this object inside the normal function", this);
    console.log("state of the component is --------- ", this.state.name, this.state.roll)
  }

  handleEvent() {
  // regular function does not contain the definition of this object inside it
  // but contain outside it
    console.log("this is regular function", this);
    console.log("name is ----",this.state.name);
    console.log("roll ---------", this.state.roll)
  }

  handleEventByArrowFunc = () => {
    console.log("arrow func contain definition of this object", this )
    console.log("you can see in console")
    console.log("this represent the present boject of it")
  }
  
  render() {
    return (
      <div>
        <h4>Demonstration of Event Handling</h4>
        <h2>Name : {this.state.name} </h2>
        <h2>Roll : {this.state.roll}</h2>
        Error indicate donot have access to this : <button onClick={this.handleEvent}>Click Me</button> <br /><br />
        <button onClick={this.handleEventByArrowFunc}>Click Me By Arrow Func</button> <br /><br />
        Binded Normal function : <button onClick={this.normalFunc}>Binding this in normal Func</button>
      </div>
  );}
  
}


export default Student;   