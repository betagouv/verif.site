import React, { Component } from 'react'
import Badge from '../../Badge/Badge'

class HttpsEnforce extends Component {
  render() {
    if(!this.props.inspect) {
      return null
    }
    if(this.props.inspect["Strictly Forces HTTPS"]) {
      return (
        <Badge status='valid' text="Force HTTPS" icon='fa-check'/>
      )
    } else {
      return (
        <Badge status='warning' text="Ne force pas HTTPS" icon='fa-exclamation-triangle'/>
      )
    }
  }
}

export default HttpsEnforce
