import React, {Component} from "react";

class Marks extends Component{  
  
  // lifecycle method Mounting
  // constructor will always call first during mounting
  constructor(props){
    super(props);
    console.log("component constructor called -------------- Marks 1", this.props)
    this.state = {
      mroll : this.props.roll 
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("component getderivedstatefromprops method-------------- Marks 2")
    // you can log here here what you want and you can do whatever you want
    console.log("-----------", props , state)
    if (props.roll != state.mroll) {
      return ({mroll : 102})
    }
    return null
  }

  componentDidMount() {
    console.log("component did mount ----------------- Marks 4")
  }
  
  render() {
    console.log("component render called ------------------ Marks 3")
    return (
      <div>
        <h3>Marks Class Base Component</h3>
        <h3>Marks :{this.state.mroll} </h3>
      </div>
  );}
  
}


export default Marks;   