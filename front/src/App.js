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
    return fetch(`https://raw.githubusercontent.com/sgmap/verif.site/0a747435e34fa03606c71523cb64dd45e66d4687/data/sites.json`)
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
        <table className="site-table">
          <tbody>
            {this.state ? this.state.analytics.map((site, idx) => <SiteRow key={idx} site={site} />) : 'Loading'}
          </tbody>
        </table>
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    );
  }
}

export default App
