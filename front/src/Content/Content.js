import React, { Component } from 'react'
import Site from '../Site/Site'
import SearchBar from '../SearchBar/SearchBar'
import './Content.css'

class Content extends Component {
  render() {
    return (
      <div className="site-table">
        <SearchBar onChange={this.props.handleTextChange} query={this.props.query} />

        {this.props.sites
          .map((site) => <Site key={site.meta.Domain} site={site} filterAdministration={this.props.filterAdministration}/>)}
      </div>
    )
  }
}

export default Content
