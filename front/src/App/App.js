import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import { Loader } from 'react-loaders'
import 'loaders.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {analytics: [], meta: {}, loading: true}
    this.getAnalytics()
  }

  getAnalytics() {
    return fetch(`https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json`)
      .then((response) => response.json())
      .then((json) => {
        const analytics = Object.keys(json.data).map((key) => {
          return json.data[key]
        })
        this.setState({analytics, meta: json.meta, loading: false})
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <Header />
        <div className={this.state.loading ? 'loaderContainer': 'loaderContainer hidden'}>
          <Loader type="pacman" />
        </div>
        <Content sites={this.state.analytics} />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    )
  }
}

export default App
