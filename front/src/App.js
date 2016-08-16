import React, { Component } from 'react'
import './App.css'
import SiteRow from './SiteRow'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.getAnalytics();
  }

  getAnalytics() {
    return fetch(`https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json`)
      .then((response) => response.json())
      .then((json) => {
        const analytics = Object.keys(json).map((key) => {
          return json[key]
        })
        this.setState({analytics})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <Header />
        <table className="site-table">
          <tbody>
            {this.state ? this.state.analytics.data.map((site, idx) => <SiteRow key={idx} site={site} />) : 'Loading'}
          </tbody>
        </table>
        <Footer lastUpdated={this.state.analytics.meta.lastUpdated} />
      </div>
    );
  }
}

export default App
