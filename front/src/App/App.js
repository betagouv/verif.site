import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Domains from '../Domains/Domains'
import Footer from '../Footer/Footer'
import Administrations from '../Administrations/Administrations'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      analytics: [],
      meta: {},
      showDomain: true
    }
    this.getAnalytics()
    this.showDomain = this.showDomain.bind(this)
    this.showAdmin = this.showAdmin.bind(this)
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

  showDomain() {
    this.setState({showDomain: true})
  }

  showAdmin() {
    this.setState({showDomain: false})
  }



  render() {
    return (
      <div>
        <Header />
        <div className="tabs">
          <div className="header">
            <button className={ this.state.showDomain ? 'domain active': 'domain'  } onClick={this.showDomain}>Par Domaine</button>
            <button className={ this.state.showDomain ? 'admin': 'admin active'  } onClick={this.showAdmin}>Par Administration</button>
          </div>
          <div className={ 'content ' + (this.state.showDomain ? 'active': '' ) }>
            <Domains sites={this.state.analytics} />
          </div>
          <div className={ 'content ' + (this.state.showDomain ? '': 'active' ) }>
            <Administrations sites={this.state.analytics} />
          </div>

        </div>
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    )
  }
}

export default App
