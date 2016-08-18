import React, { Component } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    );
  }
}

export default App
