import React, { Component } from 'react'
import './App.css'
import SiteRow from './SiteRow'

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
        <table className="site-table">
          <tbody>
            {this.state ? this.state.analytics.map((site, idx) => <SiteRow key={idx} site={site} />) : 'Loading'}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App
