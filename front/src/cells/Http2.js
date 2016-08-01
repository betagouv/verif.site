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
        <td className="valid">
          <div className="content">
            <span>HTTP2 disponible</span>
            <i className="icon fa fa-4x fa-check-circle"></i>
          </div>
        </td>
      )
    } else {
      return (
        <td className="warning">
          <div className="content">
            <span>HTTP2 indisponible</span>
            <i className="icon fa fa-4x fa-exclamation-triangle"></i>
          </div>
        </td>
      )
    }
  }
}

export default Http2
