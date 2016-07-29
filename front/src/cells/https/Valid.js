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
        <td className="valid"><span>HTTPS valide</span></td>
      )
    } else {
      return (
        <td className="invalid"><span>HTTPS non valide</span></td>
      )
    }
  }
}

export default HttpsValid
