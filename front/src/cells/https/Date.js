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

function computeDiffDays(date, today) {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const dateNotAfter = new Date(date)

  return Math.round(Math.abs((dateNotAfter.getTime() - today.getTime())/(oneDay)))
}

class HttpsDate extends Component {
  render() {
    if(!this.props.sslyze || !this.props.sslyze['Not After']) {
      return (
        <td className="unknown"></td>
      )
    }

    const today = this.props.sslyze.__today__ || new Date() // sale, pour les tests
    const diffDays = computeDiffDays(this.props.sslyze['Not After'], today)

    return (
      <td className={matchStatus(diffDays)}>
        <div className="content">
          <div className="column">
            <div className="big">{ `${diffDays}j` }</div>
            <div>avant expiration du certificat</div>
          </div>
        </div>
      </td>
    )
  }
}

export default HttpsDate
