import React, { Component } from 'react'
import Badge from '../../Badge/Badge'

class HttpsIssuer extends Component {
  render() {
    if(!this.props.sslyze || !this.props.sslyze['Highest Served Issuer']) {
      return null
    }

    const issuer = this.props.sslyze['Highest Served Issuer']

    if (issuer.indexOf('StartCom') >= 0) {
      return <Badge status='invalid' text="StartSSL" icon='fa-exclamation-triangle'/>
    } else if (issuer.indexOf('DST Root CA X3') >= 0) {
      return <Badge status='warning' text="Let's Encrypt" icon='fa-certificate'/>
    } else {
      return <Badge status='warning' text={issuer} icon='fa-certificate'/>
    }
  }
}

export default HttpsIssuer
