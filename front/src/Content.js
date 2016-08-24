import React, { Component } from 'react'
import Site from './Site'
import SearchBar from './SearchBar'
import './Content.css'

function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
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
  }

  handleTextChange(query) {
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + query

    history.pushState({path: newUrl}, "", newUrl)
    this.setState({query})
  }

  render() {
    const search = new RegExp(this.state.query,'i')

    return (
      <table className="site-table">
        <thead>
          <SearchBar onChange={this.handleTextChange} query={this.state.query} />
        </thead>

        {this.props.sites
          .filter( site => site.meta.Administration.match(search) || site.meta.Domain.match(search))
          .map((site, idx) => <Site key={idx} site={site} />)}
      </table>
    )
  }
}

export default Content
