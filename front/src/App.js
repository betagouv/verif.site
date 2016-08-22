import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SearchBar from './SearchBar'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {analytics: [], meta: {}, text: ''}
    this.handleTextChange = this.handleTextChange.bind(this)
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

  handleTextChange(text) {
    this.setState({text})
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar onChange={this.handleTextChange} text={this.state.text} />
        <Content sites={this.state.analytics} search={this.state.text} />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    );
  }
}

export default App
