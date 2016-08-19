import React, { Component } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {analytics: [], meta: {}}
    this.getAnalytics()
  }

  getAnalytics() {
    return fetch(`https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json`)
      .then((response) => response.json())
      .then((json) => {
        const analytics = Object.keys(json.data).map((key) => {
          return json.data[key]
        })
        this.setState({analytics, meta: json.meta})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar sites={this.state.analytics} />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    );
  }
}

export default App
