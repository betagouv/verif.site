import React, { Component } from 'react'
import BigBadge from './BigBadge'

class AllTimeUptimeRatio extends Component {
  render() {
    if (!this.props.monitor.alltimeuptimeratio) {
      return <td className="unknown"></td>
    }

    const text = `${this.props.monitor.alltimeuptimeratio}%`

    return <BigBadge status="valid" title="Uptime" text={text}/>
  }
}

export default AllTimeUptimeRatio
