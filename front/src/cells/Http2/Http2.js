import React, { Component } from 'react'
import Badge from '../Badge/Badge'


class Http2 extends Component {
  render() {
    if(!this.props.tls) {
      return (
        <div className="unknown"></div>
      )
    }
    if(this.props.tls["HTTP/2"]) {
      return (
        <Badge status='valid' text='HTTP2 disponible' icon='fa-check-circle'/>
      )
    } else {
      return (
        <Badge status='warning' text='HTTP2 indisponible' icon='fa-exclamation-triangle'/>
      )
    }
  }
}

export default Http2
