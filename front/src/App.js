import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.getAnalytics()
  }

  getAnalytics() {
    return fetch(`https://storage.gra1.cloud.ovh.net/v1/AUTH_b6699bd0910b4340bc216598cd2102e0/sites/sites.json`)
      .then((response) => this.setState({analytics: response.json()}))
      .catch((err) => this.setState({analytics : err}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.analytics}
        </p>
      </div>
    );
  }
}

export default App
