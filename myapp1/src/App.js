import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';


export default class App extends Component {
  render() {
    if (this.props.isUser) {
      return <User />
    }
    return <Guest />
  }
}
