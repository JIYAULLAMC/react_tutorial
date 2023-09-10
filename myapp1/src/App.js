import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';


export default class App extends Component {
  render() {
    if (this.props.isUser) {
      return (
        <div>
          <h2>User </h2>
          <User />
        </div>
      )

    }
    return(
      <div>
        <h2>Guest </h2>
        <Guest />
      </div>
    )
  }
}
