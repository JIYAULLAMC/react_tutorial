import React, {Component} from "react";

class Marks extends Component{  
  
  // lifecycle method Mounting
  // constructor will always call first during mounting
  constructor(props){
    super(props);
    console.log("component constructor called -------------- Marks 1")
    console.log("this is props----",  props)
    this.state = {
      name : "Jiyaulla"
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("component getderivedstatefromprops method-------------- Marks 2")
    // you can log here here what you want and you can do whatever you want
    return null;
  }

  componentDidMount() {
    console.log("component did mount ----------------- Marks 4")
  }
  
  render() {
    console.log("component render called ------------------ Marks 3")
    return (
      <div>
        <h2>Marks Class Base Component</h2>
        <h1>During lifecycle just you need to know when and which lifecycle method is calling, what you can do in it</h1>
      </div>
  );}
  
}


export default Marks;   