import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import { Loader } from 'react-loaders'
import 'loaders.css'

function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

class App extends Component {
  constructor(props) {
    super(props)

    const q = getParameterByName('q')
    const query = q ? q : ''

    this.state = {analytics: [], meta: {}, query, loading: true}

    this.handleTextChange = this.handleTextChange.bind(this)
    this.filterAdministration = this.filterAdministration.bind(this)

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

  handleTextChange(query) {
    let newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

    if (query) {
      newUrl += `?q=${query}`
    }

    history.replaceState({path: newUrl}, "", newUrl)
    this.setState({query})
  }

  filterAdministration(administration) {
    if (this.state.query === administration) {
      this.handleTextChange('')
    } else {
      this.handleTextChange(administration)
    }
  }


  render() {
    const search = new RegExp(this.state.query, 'i')
    const analytics = this.state.analytics.filter( site => site.meta.Administration.match(search) || site.meta.Domain.match(search))

    return (
      <div className="site-content">
        <Header sites={analytics} />

        <div className={this.state.loading ? 'loaderContainer': 'loaderContainer hidden'}>
          <Loader type="pacman" />
        </div>

        <Content sites={analytics} query={this.state.query} handleTextChange={this.handleTextChange} filterAdministration={this.filterAdministration} />
        <Footer lastUpdated={this.state ? this.state.meta.lastUpdated : '...'} />
      </div>
    )
  }
}

export default App
