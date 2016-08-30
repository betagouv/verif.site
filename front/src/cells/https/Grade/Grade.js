import React, { Component } from 'react'

function getStatus(grade) {
  if(grade.includes('A')) {
    return 'valid'
  } else if(grade.includes('B') || grade.includes('C')) {
    return 'warning'
  } else {
    return 'invalid'
  }
}

class HttpsGrade extends Component {
  render() {
    if(!this.props.tls) {
      return (
        <td className="unknown"><span></span></td>
      )
    }

    const status = getStatus(this.props.tls["Grade"])

    return (
      <td className={status}>
        <div className="content">
          <div className="column">
            <div>Note SSL</div>
            <a className="big" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] } >{ this.props.tls["Grade"] }</a>
          </div>
        </div>
      </td>
    )
  }
}

export default HttpsGrade
