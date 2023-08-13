import React, { Component } from "react";

// let ele = <h2>Creating Element in App and exporting to the index file </h2>

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Hello World</h2>
        <h2>React fragment use</h2>
      </React.Fragment>
    );
  }
}

export default App;
