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
          <div className="block-left">
            <i className="fa fa-4x fa-check-circle"></i>
          </div>
          <div className="block-right">
            <span>HTTPS valide</span>
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
            <span>HTTPS non valide</span>
          </div>
        </td>
      )
    }
  }
}

export default HttpsValid
