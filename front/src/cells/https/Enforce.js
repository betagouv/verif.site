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
        <td className="valid"><span>Force l'utilisation de HTTPS</span> <i className="fa fa-4x fa-check"></i></td>
      )
    } else {
      return (
        <td className="warning"><span>Ne force pas l'utilisation de HTTPS</span> <i className="fa fa-4x fa-times"></i></td>
      )
    }
  }
}

export default HttpsEnforce
