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
        <td className="valid">Note SSL Labs&nbsp;: <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> <i className="fa fa-4x fa-check"></i></td>
      )

    } else if(this.props.tls["Grade"].includes('B') || this.props.tls["Grade"].includes('C')) {
      return (
        <td className="warning">Note SSL Labs&nbsp;: <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> <i className="fa fa-4x fa-exclamation-triangle"></i></td>
      )
    } else {
      return (
        <td className="invalid">Note SSL Labs&nbsp;: <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> <i className="fa fa-4x fa-times"></i></td>
      )
    }
  }
}

export default HttpsGrade
