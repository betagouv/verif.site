import React, { Component } from 'react'
import HeaderRow from '../HeaderRow/HeaderRow'
import DetailRow from '../DetailRow/DetailRow'
import './Site.css'

function buildUptimeRobotURl({apiKey, format, wrapInJsonCallback, daysForCustomRatio, daysForResponseTimesAverage}) {
  const noJsonCallback = wrapInJsonCallback ? 0 : 1;
  return `https://api.uptimerobot.com/getMonitors?apiKey=${apiKey}&format=${format}&noJsonCallback=${noJsonCallback}` +
    `&customUptimeRatio=${daysForCustomRatio}&responseTimes=1&responseTimesAverage=${daysForResponseTimesAverage * 24 * 60}`
}

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
    if (this.props.site.meta.UptimeApiKey) {
      const url = buildUptimeRobotURl({
        apiKey: this.props.site.meta.UptimeApiKey,
        format: 'json',
        wrapInJsonCallback: false,
        daysForCustomRatio: 7,
        daysForResponseTimesAverage: 1
      })

      return fetch(url)
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
      <div className="site">
        <HeaderRow site={this.props.site} onArrowClick={this.onArrowClick} filterAdministration={this.props.filterAdministration} monitor={this.state.monitor}/>
        <DetailRow site={this.props.site} visible={this.state.isDetailVisible}/>
      </div>
    );
  }
}

Site.propTypes = {
  apiKey: React.PropTypes.string
}

export default Site
