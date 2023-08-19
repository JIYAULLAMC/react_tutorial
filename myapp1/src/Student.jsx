import React, {Component} from "react";
import "./Student.css";

class Student extends Component{  
  
  // this is the state and props
  state = {
    name : "jiyaulla", 
    roll : this.props.roll
  }

  // this is handle the state and props and perform the event
  handleEventByArrowFunc = (roll, event) => {
    console.log("button is clicked -----------", roll )  
    console.log("event -----------", event)  
  }

  // this will call the event
  handleClickEventArg = (event) => {
    return (
      this.handleEventByArrowFunc(this.state.roll, event)
    );
  }
  
  render() {
    return (
      <div>
        <h2>Student Class Base Component</h2>
        <h4>Demonstration of seting the state</h4>
        <h2>Name : {this.state.name} </h2>
        <h2>Roll : {this.state.roll}</h2>
        <button onClick={this.handleClickEventArg}>Click Here</button> <br />
        <h3> using annonymous function : 
        <button onClick={ event => this.handleEventByArrowFunc(this.state.roll, event)}>Click Here</button> <br />
        </h3>
        <h3> This how to bind the event : 
        <button onClick={ this.handleClickEventArg.bind(this.state.roll, this)}>Click Here</button> <br />
        </h3>
        <br />
        {/* 
        <button onClick={this.handleClickEventArg()}>Click Here</button> <br /><br /> 
        this is not a valid because it will call while rendering 
        */}
      </div>
  );}
  
}


export default Student;   