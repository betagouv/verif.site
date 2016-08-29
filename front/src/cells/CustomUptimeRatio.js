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

class CustomUptimeRatio extends Component {
  render() {
    if (!this.props.monitor.customuptimeratio) {
      return <td className="unknown"></td>
    }

    const text = `${this.props.monitor.customuptimeratio}%`
    const status = getStatus(this.props.monitor.customuptimeratio)

    return <BigBadge status={status} title="Uptime (7j)" text={text}/>
  }
}

export default CustomUptimeRatio
