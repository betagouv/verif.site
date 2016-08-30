import React, { Component } from 'react'
import BigBadge from '../../BigBadge/BigBadge'

class UptimeRatio extends Component {

  getStatus(uptime) {
    if (uptime < 90) {
      return 'invalid'
    } else if (uptime < 99.5) {
      return 'warning'
    } else {
      return 'valid'
    }
  }

  render() {
    if (!this.props.ratio) {
      return <div className="unknown"></div>
    }

    const text = `${this.props.ratio}%`
    const status = this.getStatus(this.props.ratio)

    return <BigBadge status={status} title={this.props.title} text={text}/>
  }
}

export default UptimeRatio
