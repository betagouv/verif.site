import React, { Component } from 'react'



class HttpsGrade extends Component {
  render() {
    if(!this.props.tls) {
      return (
        <td className="unknwon"><span></span></td>
      )
    }

    if(this.props.tls["Grade"].includes('A')) {
      return (
        <td className="valid"><span>{ this.props.tls["Grade"] }</span></td>
      )

    } else if(this.props.tls["Grade"].includes('B') || this.props.tls["Grade"].includes('C')) {
      return (
        <td><span>{ this.props.tls["Grade"] }</span></td>
      )
    } else {
      return (
        <td className="invalid"><span>{ this.props.tls["Grade"] }</span></td>
      )
    }
  }
}

export default HttpsGrade
