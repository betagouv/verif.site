import React, { Component } from 'react'



class HttpsValid extends Component {
  render() {
    if(!this.props.inspect) {
      return (
        <td className="unknwon"><span>HTTPS Inconnu</span></td>
      )
    }
    if(this.props.inspect["Valid HTTPS"]) {
      return (
        <td className="valid">
          <div className="content">
            <span>HTTPS valide</span>
            <i className="icon fa fa-4x fa-check-circle"></i>
          </div>
        </td>
      )
    } else {
      return (
        <td className="warning">
          <div className="content">
            <span>HTTPS non valide</span>
            <i className="icon fa fa-4x fa-exclamation-triangle"></i>
          </div>
        </td>
      )
    }
  }
}

export default HttpsValid
