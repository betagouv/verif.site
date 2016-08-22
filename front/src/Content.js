import React, { Component } from 'react'
import Site from './Site'

class Content extends Component {
  render() {
    const search = new RegExp(this.props.search,'i')

    return (
      <table className="site-table">
        {this.props.sites
          .filter( site => site.meta.Administration.match(search) || site.meta.Domain.match(search))
          .map((site, idx) => <Site key={idx} site={site} />)}
      </table>
    )
  }
}

export default Content
