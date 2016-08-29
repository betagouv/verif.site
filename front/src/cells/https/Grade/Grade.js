import React, { Component } from 'react'
import BigBadge from '../../BigBadge'

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
    const text = <a href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] } >{ this.props.tls["Grade"] }</a>

    return <BigBadge status={status} title="Note SSL" text={text}/>
  }
}

export default HttpsGrade
