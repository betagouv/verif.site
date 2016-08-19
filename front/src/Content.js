import React, { Component } from 'react'
import SiteRow from './SiteRow'

class Content extends Component {
  render() {
    var result = []
    var search = this.props.search

    if (this.props.sites.length) {
      this.props.sites.forEach(function(e) {
        if (e.meta.Administration.toLowerCase().match(search) || e.meta.Domain.toLowerCase().match(search)) {
          result.push(e)
        }
      })
    }

    return (
      <table className="site-table">
        <tbody>
          {result.map((site, idx) => <SiteRow key={idx} site={site} />)}
        </tbody>
      </table>
    )
  }
}

export default Content
