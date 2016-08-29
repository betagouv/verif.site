import React, { Component } from 'react'
import BigBadge from './BigBadge'

function getStatus(uptime) {
  if (uptime < 90) {
    return 'invalid'
  } else if (uptime < 95) {
    return 'warning'
  } else {
    return 'valid'
  }
}

class AllTimeUptimeRatio extends Component {
  render() {
    if (!this.props.monitor.alltimeuptimeratio) {
      return <td className="unknown"></td>
    }

    const text = `${this.props.monitor.alltimeuptimeratio}%`
    const status = getStatus(this.props.monitor.alltimeuptimeratio)

    return <BigBadge status={status} title="Uptime" text={text}/>
  }
}

export default AllTimeUptimeRatio
