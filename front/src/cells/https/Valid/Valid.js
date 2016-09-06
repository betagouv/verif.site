import React, { Component } from 'react'
import Badge from '../../Badge/Badge'



class HttpsValid extends Component {
  render() {
    if(!this.props.inspect) {
      return (
        <div className="unknown"></div>
      )
    }
    if(this.props.inspect["Valid HTTPS"]) {
      return (
        <Badge status='valid' text='HTTPS valide' icon='fa-check-circle'/>
      )
    } else {
      return (
        <Badge status='invalid' text='HTTPS non valide' icon='fa-exclamation-triangle'/>
      )
    }
  }
}

export default HttpsValid
