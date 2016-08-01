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
          <div className="block-left">
            <i className="fa fa-4x fa-check-circle"></i>
          </div>
          <div className="block-right">
            <span>HTTP2 disponible</span>
          </div>
        </td>
      )
    } else {
      return (
        <td className="warning">
          <div className="block-left">
            <i className="fa fa-4x fa-exclamation-triangle"></i>
          </div>
          <div className="block-right">
            <span>HTTP2 indisponible</span>
          </div>
        </td>
      )
    }
  }
}

export default Http2
