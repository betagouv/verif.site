import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SearchBar from './SearchBar'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    let q = this.getParameterByName('q')
    this.state = {analytics: [], meta: {}, text: q ? q : ''}
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
        console.error(err)
      })
  }

  handleTextChange(text) {
    let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + text

    history.pushState({path: newUrl}, "", newUrl)
    this.setState({text})
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar onChange={this.handleTextChange} text={this.state.text} />
        <Content sites={this.state.analytics} search={this.state.text} />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    )
  }
}

export default App
