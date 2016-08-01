import React, { Component } from 'react'



class HttpsEnforce extends Component {
  render() {
    if(!this.props.inspect) {
      return (
        <td className="unknwon"><span>HTTPS Inconnu</span></td>
      )
    }
    if(this.props.inspect["Strictly Forces HTTPS"]) {
      return (
        <td className="valid">
          <div className="content">
            <span>Force l'utilisation de HTTPS</span>
            <i className="icon fa fa-4x fa-check-circle"></i>
          </div>
        </td>
      )
    } else {
      return (
        <td className="warning">
          <div className="content">
            <span>Ne force pas l'utilisation de HTTS</span>
            <i className="icon fa fa-4x fa-exclamation-triangle"></i>
          </div>
        </td>
      )
    }
  }
}

export default HttpsEnforce
