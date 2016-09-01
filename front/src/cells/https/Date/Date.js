import React, { Component } from 'react'

function matchStatus(diffDays) {
  if (diffDays <= 14) {
    return 'invalid';
  } else if (diffDays <= 30) {
    return 'warning'
  } else {
    return 'valid'
  }
}

function computeDiffDays(date) {
  const today = new Date()
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const dateWithoutTime = date.substring(0, 10)
  const dateNotAfter = new Date(dateWithoutTime)

  return Math.round(Math.abs((dateNotAfter.getTime() - today.getTime())/(oneDay)))
}

class HttpsDate extends Component {
  render() {
    if(!this.props.sslyze || !this.props.sslyze['Not After']) {
      return null
    }

    const diffDays = computeDiffDays(this.props.sslyze['Not After'])

    return (
      <div className={matchStatus(diffDays) + ' badge'}>
        <div className="big">{ `${diffDays}j` }</div>
        <div>Expiration du certificat</div>
      </div>
    )
  }
}

export default HttpsDate
