import React, {Component} from 'react';

// let ele = <h2>Creating Element in App and exporting to the index file </h2>

class App extends Component{
    render() {
        return (React.createElement("h2", null, "This is class base demo react component"));
    }
}

export default App;