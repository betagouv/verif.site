import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import { Loader } from 'react-loaders'
import { fetchAnalyticsIfNeeded, updateQuery } from '../actions'
import 'loaders.css'
import './App.css'

function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
  if (!results) return ''
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAnalyticsIfNeeded())
  }

  handleTextChange(query) {
    this.props.dispatch(updateQuery(query))

    const queryParam = query ? `?q=${query}` : ''
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${queryParam}`

    history.replaceState({path: newUrl}, "", newUrl)
  }

  render() {
    const { analytics, isFetching, lastUpdated, dispatch } = this.props
    const query = this.props.query ? this.props.query : getParameterByName('q')

    const search = new RegExp(query, 'i')
    const filteredAnalytics = analytics.filter( site => site.meta.Administration.match(search) || site.meta.Domain.match(search))

    return (
      <div className="site-content">
        <Header sites={filteredAnalytics} dispatch={dispatch}/>

        <div className={isFetching ? 'loaderContainer': 'loaderContainer hidden'}>
          <Loader type="pacman" />
        </div>

        <Content sites={filteredAnalytics} query={query} handleTextChange={this.handleTextChange} />
        <Footer lastUpdated={lastUpdated ? lastUpdated : '...'} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    query,
    isFetching,
    lastUpdated,
    items: analytics
  } = state || {
    query: '',
    isFetching: true,
    items: []
  }

  return {
    query,
    analytics,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
