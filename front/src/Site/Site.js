import React, { Component } from 'react'
import HeaderRow from '../HeaderRow/HeaderRow'
import DetailRow from '../DetailRow/DetailRow'

class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {isDetailVisible: false, monitor: {}}
    this.onArrowClick = this.onArrowClick.bind(this)
    this.fetchUptime()
  }

  onArrowClick() {
    this.setState({isDetailVisible: !this.state.isDetailVisible})
  }

  fetchUptime() {
    //noJsonCallback or else the json will be wrapped in a callback function
    //responseTimes=1&responseTimesAverage=${24 * 60}, average for the last day (24 * 60 minutes)
    //customUptimeRatio=7 uptime for the last 7 days
    if (this.props.site.meta.UptimeApiKey) {
      return fetch(`https://api.uptimerobot.com/getMonitors?apiKey=${this.props.site.meta.UptimeApiKey}&format=json&noJsonCallback=1&customUptimeRatio=7&responseTimes=1&responseTimesAverage=${24 * 60}`)
        .then((response) => response.json())
        .then((json) => {
          const monitor = json.monitors.monitor[0]
          this.setState({monitor})
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }


  render() {
    return (
      <tbody>
        <HeaderRow site={this.props.site} onArrowClick={this.onArrowClick} filterAdministration={this.props.filterAdministration} monitor={this.state.monitor}/>
        <DetailRow site={this.props.site} visible={this.state.isDetailVisible}/>
      </tbody>
    );
  }
}

Site.propTypes = {
  apiKey: React.PropTypes.string
}

export default Site
