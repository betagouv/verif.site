import React, { Component } from 'react'
import Badge from '../Badge'



class HttpsValid extends Component {
  render() {
    if(!this.props.inspect) {
      return (
        <td className="unknwon"><span>HTTPS Inconnu</span></td>
      )
    }
    if(this.props.inspect["Valid HTTPS"]) {
      return (
        <Badge status='valid' text='HTTPS valide' icon='fa-check-circle'/>
      )
    } else {
      return (
        <Badge status='warning' text='HTTPS non valide' icon='fa-exclamation-triangle'/>
      )
    }
  }
}

export default HttpsValid
