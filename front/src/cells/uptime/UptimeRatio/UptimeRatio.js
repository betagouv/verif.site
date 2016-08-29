import React, { Component } from 'react'
import BigBadge from '../../BigBadge/BigBadge'

function getStatus(uptime) {
  if (uptime < 90) {
    return 'invalid'
  } else if (uptime < 95) {
    return 'warning'
  } else {
    return 'valid'
  }
}

class UptimeRatio extends Component {
  render() {
    if (!this.props.ratio) {
      return <td className="unknown"></td>
    }

    const text = `${this.props.ratio}%`
    const status = getStatus(this.props.ratio)

    return <BigBadge status={status} title={this.props.title} text={text}/>
  }
}

export default UptimeRatio
