import React, { Component } from 'react'
import Badge from '../../Badge/Badge'

class HttpsEnforce extends Component {
  render() {
    if(!this.props.inspect) {
      return (
        <td className="unknown"><span>HTTPS Inconnu</span></td>
      )
    }
    if(this.props.inspect["Strictly Forces HTTPS"]) {
      return (
        <Badge status='valid' text="Force l'utilisation de HTTPS" icon='fa-check-circle'/>
      )
    } else {
      return (
        <Badge status='warning' text="Ne force pas l'utilisation de HTTPS" icon='fa-exclamation-triangle'/>
      )
    }
  }
}

export default HttpsEnforce
