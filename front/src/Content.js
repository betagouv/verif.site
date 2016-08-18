import React, { Component } from 'react'
import SiteRow from './SiteRow'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {analytics: [], meta: {}}
    this.getAnalytics()
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
        console.error(err);
      })
  }

  render() {
    var result = []
    var search = this.props.search

    console.log(this);
    if (this.state.analytics.length && this.props) {
      this.state.analytics.forEach(function(e) {
        console.log(e.meta.Domain)
        if (e.meta.Administration.toLowerCase().match(search) || e.meta.Domain.toLowerCase().match(search)) {
          result.push(e)
        }
      })
    } else {
      result = this.state.analytics
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
