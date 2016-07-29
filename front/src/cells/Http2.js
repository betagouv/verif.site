import React, { Component } from 'react'



class Http2 extends Component {
  render() {
    if(!this.props.tls) {
      return (
        <td className="unknwon"></td>
      )
    }
    if(this.props.tls["HTTP/2"]) {
      return (
        <td className="valid"><span>HTTP2 disponible</span> <i className="fa fa-4x fa-check"></i></td>
      )
    } else {
      return (
        <td className="warning"><span>HTTP2 indisponible</span> <i className="fa fa-4x fa-exclamation-triangle"></i></td>
      )
    }
  }
}

export default Http2
