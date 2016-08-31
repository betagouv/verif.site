import React, { Component } from 'react'
import Site from '../Site/Site'
import SearchBar from '../SearchBar/SearchBar'
import Charts from '../Charts/Charts'
import './Domains.css'

function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

class Content extends Component {
  constructor(props) {
    super(props)
    let q = getParameterByName('q')
    this.state = {query: q ? q : ''}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.filterAdministration = this.filterAdministration.bind(this)
  }

  handleTextChange(query) {
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?q=${query}`

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
    const displaySites = this.props.sites
      .filter( site => site.meta.Administration.match(search) || site.meta.Domain.match(search))
    return (
      <div>
        <Charts sites={displaySites} />

        <table className="site-table">
          <thead>
            <SearchBar onChange={this.handleTextChange} query={this.state.query} />
          </thead>

          {displaySites
            .map((site, idx) => <Site key={idx} site={site} filterAdministration={this.filterAdministration}/>)}
        </table>
      </div>
    )
  }
}

export default Content
